import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Skills from './Skills';
import Header from './Nav';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Nopage from './Nopage'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
   

<BrowserRouter>  
 <Header/>
<Routes>
  <Route path='/' element={<Home/>} ></Route>
  <Route path='/Skills' element={<Skills/>} ></Route>
  <Route path='/About' element={<About/>} ></Route>
  <Route path='/Contact' element={<Contact/>} ></Route>
  <Route path='*' element={<Nopage/>} ></Route>
</Routes>
<Footer/>
</BrowserRouter>
    </div>
  );
}

export default App;
