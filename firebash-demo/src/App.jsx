import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './firebash/Signup'
import Login from './firebash/Login'
import Dashbord from './firebash/Dashbord'

function App() {



  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Signup} />
        <Route path="/login" Component={Login} />
        <Route path="/dashbord" Component={Dashbord} />
      </Routes>
      </BrowserRouter>
        
         {/* <Signup/> */}
    </>
  )
}

export default App
