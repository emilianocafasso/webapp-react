import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Homepage from './pages/HomePage'
import MovieDetailPage from './pages/MovieDatailPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/movie/:id' element={<MovieDetailPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
