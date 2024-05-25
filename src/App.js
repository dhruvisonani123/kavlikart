
import './App.css';
import { BrowserRouter as Router,Route,witch} from 'react-router-dom';
import About from './components/About';
import Aboutghee from './components/Aboutghee';
import Button from './components/Button';
import Contactus from './components/Contactus';
import Factor from './components/Factor';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      
      {/* <Home/> */}
      {/* <About/> */}
      <Aboutghee/>
      {/* <Product/> */}
      {/* <Factor/> */}
      {/* <Contactus/> */}
      {/* <Footer/> */}
      {/* <Button/> */}
      

      
    </div>
  );
}

export default App;
