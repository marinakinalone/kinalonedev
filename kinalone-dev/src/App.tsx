import React from 'react';
import { Header, Intro, Navigation, Projects, About, Contact, Footer } from './components/Index';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className=" ">
        <Intro />
        <Navigation />
      </div>
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
