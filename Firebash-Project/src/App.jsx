import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Firebash/Signup'
import Login from './Firebash/Login'
import Dashbord from './Firebash/Dashbord'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path = '/' Component={Signup} />
      <Route path = '/login' Component={Login} />
      <Route path = '/deshbord' Component={Dashbord} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
