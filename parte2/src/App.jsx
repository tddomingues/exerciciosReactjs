import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"

import Home from "./pages/Home"
import Produtos from "./pages/Produtos"
import SaibaMais from "./pages/SaibaMais"
import NavBar from "./components/NavBar"
import User from "./pages/User"
import NotFound from "./pages/NotFound"
import Search from "./components/Search"
import Resulting from "./pages/Resulting"
import Login from "./pages/Login"

function App() {

  const isAuth = false

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Search/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/produtos" element={isAuth ? <Produtos/> : <Navigate to="/"/>}/> {/*Ou assim*/}
        <Route path="/saibaMais" element={<SaibaMais/>}/>
        <Route path="/user/:userId" element={<User/>}/>
        <Route path={`/search`} element={<Resulting/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/login" element={isAuth ? <Home/> : <Login/>}/> {/*Ou assim*/}
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App


