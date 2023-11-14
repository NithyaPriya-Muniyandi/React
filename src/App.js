import './../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from "./Components/NavBar/navbar";
import Intro from "./Components/Intro/intro";
import About from './Components/About/about';
import Works from './Components/Works/works';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import Certificate from './Components/Certificate/certify';
function App() {
  return (
  <>
    
    <Navbar/>
    <Intro/> 
    <About/>
    <Works/>
    <Certificate/>
    <Contact/>
    <Footer/>
    
  </>


  );
}

export default App;
