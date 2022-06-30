
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Project from './Components/Project';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';
import Team from './Components/Team';
import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar />
        <Routes>
          
            <Route exact path="/" element={<Home />} />
            <Route  exact path="/Project" element={<Project />} />
            <Route  exact path="/Pricing" element={<Pricing />} />
            <Route  exact path="/Team" element={<Team />} />
            <Route  exact path="/Contact" element={<Contact />} />

            
        </Routes>
        
         <Footer />
      </Router>
    </div>
  );
}

export default App;

