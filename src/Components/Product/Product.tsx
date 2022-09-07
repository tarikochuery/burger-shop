import { IProduct } from "../../services/api/getProducts"
import { ICartActions } from "../Cart/Cart"
import { ProductStyle } from "./style"

interface Props {
  product: IProduct
  cartActions: ICartActions
}

export const Product:React.FC<Props> = ({ product, cartActions }) => (
  <ProductStyle>
    <div className="img-container">
      <img src={product.img} alt={product.name} />
    </div>
    <div className="product-info">
      <h2 className="product-name">{product.name}</h2>
      <p className="category">{product.category}</p>
      <p className="price">R$ {product.price.toFixed(2)}</p>
      <button onClick={() => cartActions.addItem(product)}>Adicionar</button>
    </div>
  </ProductStyle>
)