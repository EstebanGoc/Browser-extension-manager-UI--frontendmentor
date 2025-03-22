import React, { useState } from 'react'
import Search from '../components/Search'
import './App.css'

const Main = () => {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const handleChangeDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <div className={isDarkMode ? "main-container-dark-mode" : "main-container"}>
      <Search handleChangeDarkMode={handleChangeDarkMode} isDarkMode={isDarkMode} />

    </div>
  )
}

export default Main