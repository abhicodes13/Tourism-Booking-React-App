import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Tour from './pages/Tour';




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Tour/>}/>
      </Routes>
    </BrowserRouter>
  )
}
