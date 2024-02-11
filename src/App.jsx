import './App.css'
import { useState } from 'react'

function App() {
  const [title, selectedTitle] = useState("selected")

  function changeSelectedTitle(title) {
    selectedTitle(title)
  }

  return (
    <>
      <nav> Denzel Echevarria </nav>
      <main>
        <h1>{()=>{changeSelectedTitle}}{title}</h1>
      </main>
      
    </>
    
  )
}

export default App
