import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Process from './components/Process/Process';
import About from './components/About/About';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Contact from './components/Contact/Contact';

import { Routes, Route } from "react-router-dom";
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="app">
      
      <Header />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Process />
               <Projects/>
              <About />
              <WhyChooseUs />
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Services Page */}
        <Route path="/services" element={<Services />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        <Route path='/projects' element={<Projects/>}/>

      </Routes>

      <Footer />

    </div>
  );
}

export default App;