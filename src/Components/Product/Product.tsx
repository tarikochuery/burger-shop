import { IProduct } from "../../services/api/getProducts"
import { ProductStyle } from "./style"

interface Props {
  product: IProduct
}

export const Product:React.FC<Props> = ({ product: {
  category,
  img,
  name,
  price
} }) => (
  <ProductStyle>
    <div className="img-container">
      <img src={img} alt={name} />
    </div>
    <div className="product-info">
      <h2 className="product-name">{name}</h2>
      <p className="category">{category}</p>
      <p className="price">R$ {price.toFixed(2)}</p>
      <button>Adicionar</button>
    </div>
  </ProductStyle>
)