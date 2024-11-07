import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Client from './components/section/Client';
import Working from './components/section/Working';
import Services from './components/section/Services';
import Testimonials from './components/section/Testimonials';
import Portfolio from './components/section/Portfolio';
import Architect from './components/section/Architect';
import Specification from './components/section/Specification';
import About from './components/section/About';

function App() {
  return (
    <>
     <div className="App">
      <Router>
      <Header />
      <Working />
      <Services />
      <Portfolio/>
      <Testimonials/>
      <Architect/>
      <Specification/>
      <Routes>
      <Route exact path='/' ></Route>
      </Routes>
      <About/>
      <Client/>
      <Footer/>
      </Router>
      
    </div>
    </>
  );
}

export default App;
