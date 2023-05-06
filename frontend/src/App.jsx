import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Muvitime from './pages/muvitime';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/signup' element={<Signup/>}></Route>
      <Route exact path='/' element={<Muvitime/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
