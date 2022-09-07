import { useEffect, useState } from 'react'
import { Product } from './Components/Product/Product'
import { ProductsList } from './Components/ProductsList/ProductsList'
import { IProduct, getProducts } from './services/api/getProducts'
import { Header } from './Components/Header/Header'
import { Cart } from './Components/Cart/Cart'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const getData = async () => {
      const data = await getProducts()
      data && setProducts(data)
    }

    getData()
  }, [getProducts])

  return (
    <div>
      <Header />
      <div style={{padding: '25px 100px',
                   display: 'flex'}}>
        <ProductsList>
          {products.length !== 0 
            ? 
              products.map(product => <Product product={product} key={product.id}/>)
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
