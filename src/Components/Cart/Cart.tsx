import { useState } from "react"
import { IProduct } from "../../services/api/getProducts"
import { CartItem } from "../CartItem/CartItem"
import { CartStyle } from "./style"

export interface ICartActions {
  addItem: (item: IProduct) => void,
  removeItem: (id: number | string) => void,
  removeAll: () => void
}

interface Props {
  cartItems: IProduct[],
  cartActions: ICartActions
}

export const Cart: React.FC<Props> = ({ cartActions, cartItems }) => {

  return (
    <CartStyle>
      <header className="cart-header">
        <h3>Carrinho de Compras</h3>
      </header>
        {cartItems.length === 0 
          ?
          <div className="empty-cart">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </div>
          :
          <div className="cart-items">
            <div className="items-container">
            {cartItems.map(item => <CartItem item={item} removeItem={cartActions.removeItem} key={item.id} />)}
            </div>
            <div className="total">
              <strong>Total</strong>
              <p>R$ 
                {cartItems
                  .reduce((acc, item) => {
                    return acc += item.price
                  }, 0)
                  .toFixed(2)}
              </p>
            </div>
            <button onClick={cartActions.removeAll}>Remover Todos</button>
          </div>
        }
    </CartStyle>
  )
}