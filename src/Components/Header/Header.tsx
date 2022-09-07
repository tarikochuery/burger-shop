import { SearchBar } from "../SearchBar/SearchBar";
import { HeaderStyle } from "./style";

export interface HeaderProps {
  filterProducts: (filter: string) => void
}

export const Header:React.FC<HeaderProps> = ({ filterProducts }) => (
  <HeaderStyle>
    <h1>Burger</h1>
    <SearchBar filterProducts={filterProducts}/>
  </HeaderStyle>
)