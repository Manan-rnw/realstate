
import './App.css';
import { Routes , Route} from "react-router-dom"
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';


function App() {
  return (
    

      <>

         <Navbar/>

         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
         </Routes>
      </>
    
  );
}

export default App;
