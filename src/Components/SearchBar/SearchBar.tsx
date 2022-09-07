import React, { useState } from "react"
import { HeaderProps } from "../Header/Header"
import { SearchBarStyle } from "./style"

export const SearchBar:React.FC<HeaderProps> = ({ filterProducts }) => {
  const [searchValue, setSearchValue] = useState("")
  
  const handleInputChange = (e: React.ChangeEvent) => {
    const input = e.target as HTMLInputElement
    setSearchValue(input.value.toLowerCase())
  }

  return(
    <SearchBarStyle>
      <input type="text" placeholder="Digitar Pesquisa" onChange={handleInputChange}/>
      <button onClick={() => filterProducts(searchValue)}>Pesquisar</button>
    </SearchBarStyle>
  )
}