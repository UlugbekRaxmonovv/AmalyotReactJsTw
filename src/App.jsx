
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Wishlist from './pages/Wishlist/Wishlist'
import Korzinka from './pages/Korzinka/Korzinka'
import About from './pages/About/About'
import Katalog from './pages/Katalog/Katalog'
import Navosti from './pages/Navosti/Navosti'
import WishlistAll from './pages/WishlistAll/WishlistAll'
function App() {


  return (
    <>
    <Routes>
      <Route exact path="/"  element={<Home/>} />
      <Route path="/about"  element={<About/>}  />
      <Route path="/katalog"  element={<Katalog/>}  />
      <Route path="/korzinka"  element={<Korzinka/>}  />
      <Route path="/wishlist/:id"  element={<Wishlist/>}  />
      <Route path="/navosti"  element={<Navosti/>}  />
      <Route path="/wishlistall"  element={<WishlistAll/>}  />
    </Routes>
    
    </>
  )
}

export default App
