import { Routes, Route } from 'react-router-dom';

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"; // Import the 'Favs' component
import Contact from "./Routes/Contact"; // Import the 'Favs' component
import Detail from "./Routes/Detail"; // Import the 'Favs' component
import Favs from "./Routes/Favs"; // Import the 'Favs' component




function App() {
  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/detail:id" element={<Detail/>}/>
          <Route path="/favs" element={<Favs/>}/> 
        </Routes>
          <Footer/>
          
      </div>
  );
}

export default App;
