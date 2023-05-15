import './App.css'
import Login from './assets/components/Login'
import Profile from './assets/components/Profile'
import SignIn from './assets/components/SignIN'
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
    </>
  )
}

export default App
