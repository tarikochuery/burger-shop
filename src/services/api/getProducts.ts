import data from '../db/products.json'

export interface IProduct {
  id: number,
  name: string,
  category: string,
  price: number,
  img: string
}

const productsPromise = () => {
  return new Promise<IProduct[]>((resolve, reject) => {
    setTimeout(() => {
      data ? resolve(data) : reject('Oooops... something went wrong')
    }, 2000)
  })
}

export const getProducts = async () => {
  try {
    const products = await productsPromise()
    return products
  } catch (error) {
    console.log(error)
  }
}

export {}