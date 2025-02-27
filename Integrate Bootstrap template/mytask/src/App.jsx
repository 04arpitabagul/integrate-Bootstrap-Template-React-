import { useState } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap-icons/font/bootstrap-icons.min.css";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './herosection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection />
    </>
  )
}

export default App
