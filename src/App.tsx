import { ToastContainer } from 'react-toastify'
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
      <ToastContainer />
      <div className='inter'>
        <Header/>
      </div>
    </>
  )
}

export default App
