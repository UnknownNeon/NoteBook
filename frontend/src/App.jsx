import { useState } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { Route , Routes } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import Navbar from "./components/Navbar"
import DonePage from './pages/donePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box minH={"100vh"}>
      <Navbar/>
      <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/create' element={<CreatePage />}/>
          <Route path='/done' element={<DonePage /> }/>
      </Routes>
    </Box>
  )
}

export default App
