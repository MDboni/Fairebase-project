import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Page/HomePage.jsx'
import Login from './Component/Login.jsx'
import Register from './Component/Register.jsx'
import ProviderContext from './ProviderContext/ProviderContext.jsx'
import Profile from './Component/Profile.jsx'
import Private from './PrivateRoute/Private.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProviderContext>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signIn' element={<Login/>}/>
          <Route path='/signUp' element={<Register/>}/>
          <Route path='/profile' element={<Private><Profile/></Private>}/>
        </Routes>
      </ProviderContext>
    </BrowserRouter>
  </StrictMode>,
)
