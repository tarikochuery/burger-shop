import { useState } from "react"
import { CartStyle } from "./style"

export const Cart = () => {
  const [items, setItems] = useState([])

  return (
    <CartStyle>
      <header className="cart-header">
        <h3>Carrinho de Compras</h3>
      </header>
        {items.length === 0 
          ?
          <div className="cart-items">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </div>
          :
          <div className="cart-items">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </div>
        }
    </CartStyle>
  )
}