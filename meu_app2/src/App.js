import React from 'react';
import Header from './components/header/header';
import Main from './components/body/main';
import Footer from './components/footer/footer'
import './App.css';



function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
