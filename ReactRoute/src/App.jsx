import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Nav from './Components/nav'
import Home from './Pages/Home'
import Components from './Pages/components'
import CardInformativa from './Pages/CardInformativa'
import Calculadora from './Pages/Calculadora'
import Todo from './Pages/TodoList'

function App() {

  return (
    <>
    <Router>
      <Nav />
      <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/components' element = {<Components />} />
      <Route path='/CardInformativa' element = {<CardInformativa />} />
      <Route path='/Calculadora' element = {<Calculadora />} />
      <Route path='/TodoList' element = {<Todo />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
