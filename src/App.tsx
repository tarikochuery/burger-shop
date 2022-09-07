import { useEffect, useState } from 'react'
import { Product } from './Components/Product/Product'
import { ProductsList } from './Components/ProductsList/ProductsList'
import { IProduct, getProducts } from './services/api/getProducts'
import { Header } from './Components/Header/Header'
import { Cart } from './Components/Cart/Cart'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])

  const filterProducts = (filter: string | undefined) => {
    if(!filter) {
      setFilteredProducts(products)
      return
    }

    setFilteredProducts(products.filter(product => product.name.toLocaleLowerCase().includes(filter) || product.category.toLocaleLowerCase().includes(filter)))
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
      <div style={{padding: '25px 100px',
                   display: 'flex'}}>
        <ProductsList>
          {filteredProducts.length !== 0 
            ? 
              filteredProducts.map(product => <Product product={product} key={product.id}/>)
            :
              <p>loading...</p>
          }
        </ProductsList>
        <Cart />
      </div>
    </div>
  )
}

export default App
