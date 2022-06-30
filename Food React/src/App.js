import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
 import "animate.css/animate.min.css"; 
 import { AnimationOnScroll } from 'react-animation-on-scroll';

import './App.css';
import Header from './Components/Header';
 import Home from './Components/Home'; 
import About from './Components/About';
import Services from './Components/Services';
import Menu from './Components/Menu';
import Mobile from './Components/Mobile';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      
      
      <Router>
     <Header />
     
        <Routes>
          
             <Route exact path="/" element={<Home />} /> 
            <Route  exact path="/about" element={<About />} />
            <Route  exact path="/services" element={<Services />} />
            <Route  exact path="/menu" element={<Menu />} />
            <Route  exact path="/mobile" element={<Mobile />} />
           
            <Route  exact path="/contact" element={<Contact />} />
           
            
        </Routes>
        
         
      </Router>
    
    </div>
    
    
  );
}

export default App;
