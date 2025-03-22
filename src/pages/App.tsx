import React, { useState } from 'react'
import Search from '../components/Search'
import './App.css'
import Sort from '../components/Sort'

// eslint-disable-next-line react-refresh/only-export-components
export enum typeSort {
  All,
  Active,
  Inactive
}
const Main = () => {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const [sort, setSort] = useState<typeSort>(typeSort.All)

  const handleChangeDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <div className={isDarkMode ? "main-container-dark-mode" : "main-container"}>
      <Search handleChangeDarkMode={handleChangeDarkMode} isDarkMode={isDarkMode} />
      <Sort sort={sort} setSort={setSort} isDarkMode={isDarkMode} />
    </div>
  )
}

export default Main