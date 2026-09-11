import { ToastContainer } from 'react-toastify'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  return (
    <>
      <ToastContainer />
      <header><Header></Header></header>
      <main><Main></Main></main>
    </>
  )
}

export default App
