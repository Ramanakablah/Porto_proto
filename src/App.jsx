import Footer from "./Components/Footer/Foooter"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home"
import Learnings from "./Pages/Learnings"
import "./main.css"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Home/>}/>
      <Route path="/learning" element={<Learnings/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
