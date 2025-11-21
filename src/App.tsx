import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import MainContent from './components/main/MainContent'
import ModalElement from './components/main/ModalElement'

function App() {

  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<MainContent/>}>
            <Route path='/courses' element={<ModalElement/>}>
              <Route path='/courses/session/:id'></Route>
            </Route>
        </Route>
        <Route path='/contact'></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter> 
  )
}

export default App
