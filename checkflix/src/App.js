import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Movie from './pages/movie'
import Detail from './pages/detail'


 function App() {
  return(
    <div>
<BrowserRouter>
<Routes>
  <Route index element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/movie" element={<Movie />} />
  <Route path="/detail" element={<Detail />} />
</Routes>
</BrowserRouter>
    </div>
  )
}
export default App