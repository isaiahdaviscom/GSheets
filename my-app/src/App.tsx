import React from 'react';
import './App.css';
import Header from './components/Header';
import Toolbar from './components/Actionbar';
import Formulabar from './components/Formulabar';
import Table from './components/Table';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header></Header>
      <Toolbar></Toolbar>
      <main>
        <Formulabar></Formulabar>
        <Table as="canvas"></Table>
      </main>
      <Footer></Footer>
      <div className="ui_overlay">
        <p>this is where the magic will happen</p>
      </div>
    </>
  );
}

export default App;
