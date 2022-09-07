import { ProductsListStyle } from "./style";

interface Props {
  children: React.ReactNode
}

export const ProductsList:React.FC<Props> = ({ children }) => (
  <ProductsListStyle>
    {children}
  </ProductsListStyle>
)