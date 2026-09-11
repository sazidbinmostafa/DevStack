import { ToastContainer } from 'react-toastify'
import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <ToastContainer />
      <header><Header></Header></header>
      <main><Main></Main></main>
      <footer><Footer/></footer>
    </>
  )
}

export default App
