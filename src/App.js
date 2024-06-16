import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Contactos from './components/Contactos';
import Creditos from './components/Creditos';
import Navbarprin from './layouts/Navbarprin';
import Footer1 from './layouts/Footer1';
import Socios from './components/Socios';

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbarprin/>}>
            <Route index element={<Home/>}/>
            <Route path='Contactos' element={<Contactos/>}/>
            <Route path='Creditos' element={<Creditos/>}/>
            <Route path='Socios' element={<Socios/>}/>
            <Route path='*' element={<Navigate replace to="/"/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
      </div>
      <Footer1/>
    </div>
  );
}

export default App;
