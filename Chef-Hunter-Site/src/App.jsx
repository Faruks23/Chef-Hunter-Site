import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Header section */}
      <div className="header">
       <Header></Header>
      </div>
      {/* main section */}
      <div className="main">
         <Outlet></Outlet>
      </div>

      {/* Footer section */}
      <div className="footer">
         <Footer></Footer>
      </div>
    </div>
  )
}

export default App
