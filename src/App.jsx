import { styles } from "./style"
import { BrowserRouter } from "react-router-dom"
import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Test from "./components/test"

const App = () => {

  return (
    <BrowserRouter>
    <div className="relative">
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Test />
          <About />
        </div>
    </div>
    
    </BrowserRouter>
  )
}

export default App
