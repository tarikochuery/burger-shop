import { IProduct } from "../../services/api/getProducts"
import { CartItemStyle } from "./style"

interface Props {
  item: IProduct,
  removeItem: (id: number) => void
}

export const CartItem:React.FC<Props> = ({ item, removeItem }) => (
  <CartItemStyle>
    <div className="img-container">
      <img src={item.img} alt={item.name} />
    </div>
    <div className="item-info">
      <h3 className="item-name">{item.name}</h3>
      <p className="item-category">{item.category}</p>
    </div>
    <button onClick={() => removeItem(item.id)}>Remover</button>
  </CartItemStyle>
)