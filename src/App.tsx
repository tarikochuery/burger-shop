import { useEffect, useState } from 'react'
import { Product } from './Components/Product/Product'
import { ProductsList } from './Components/ProductsList/ProductsList'
import { IProduct, getProducts } from './services/api/getProducts'
import { Header } from './Components/Header/Header'
import { Cart } from './Components/Cart/Cart'
import { AppStyle } from './styles/app.style'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])
  const [cartItems, setCartItems] = useState<IProduct[]>([])

  const cartActions = {
    addItem: (product: IProduct) => {
      for (const item of cartItems) {
        if (item.id === product.id) {
          return
        }
      }
      setCartItems([...cartItems, product])
    },
    removeItem: (id: number) => {
      setCartItems(cartItems.filter(item => item.id !== id))
    },
    removeAll: () => {
      setCartItems([])
    }
  }

  const filterProducts = (filter: string | undefined) => {
    if(!filter) {
      setFilteredProducts(products)
      return
    }

    setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(filter) || product.category.toLowerCase().includes(filter)))
    return
  }

  useEffect(() => {
    const getData = async () => {
      const data = await getProducts()
      data && setProducts(data)
    }

    getData()
  }, [])

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  return (
    <div>
      <Header filterProducts={filterProducts}/>
      <AppStyle>
        <ProductsList>
          {filteredProducts.length !== 0 
            ? 
              filteredProducts.map(product => <Product cartActions={cartActions} product={product} key={product.id}/>)
            :
              <p>loading...</p>
          }
        </ProductsList>
        <Cart cartItems={cartItems} cartActions={cartActions} />
      </AppStyle>
    </div>
  )
}

export default App
