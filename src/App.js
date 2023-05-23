import './App.css';
import NavBar from './components/navBar/NavBar';
import Hero from './components/Hero/Hero';
import Skills from './components/skills/Skills';
import Projects from './components/Projects/Projects';
import Conntact from './components/conntact/Conntact';
import Newsle from './components/Newsle/Newsle';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Section1 from './components/Projects/Section1';
import Section2 from './components/Projects/Section2';
import Section3 from './components/Projects/Section3';


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Routes>
        <Route path='' element={''}>
          <Route path ="tab-one" element= {<Section1/>}/>
          <Route path ="tab-two" element= {<Section2/>}/>
          <Route path ="tab-three" element= {<Section3/>}/>
        </Route>
      </Routes>
      <Conntact />
      <Newsle />
      <Footer />
      
    




      
    </>
    
  );
}

export default App;
