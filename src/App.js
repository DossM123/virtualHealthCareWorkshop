import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Workshop from './components/Workshops';
import About from './components/About';
import Contact from './components/Contact';
import TopHospitals from './components/TopHospitals';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <TopHospitals/>
      <About/>
      <Workshop/>
      <Contact/>
      


    </div>
  );
}

export default App;
