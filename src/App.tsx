import { useEffect, useState } from 'react'
import { IProduct, getProducts } from './services/api/getProducts'

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
      {products.length !== 0 
        ? 
          products.map(product => <p> {product.name} </p>)
        :
          <p>loading...</p>
      }
    </div>
  )
}

export default App
