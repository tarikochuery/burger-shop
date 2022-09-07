import { useState } from "react"
import { SearchBarStyle } from "./style"

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("")

  return(
    <SearchBarStyle>
      <input type="text" placeholder="Digitar Pesquisa"/>
      <button>Pesquisar</button>
    </SearchBarStyle>
  )
}