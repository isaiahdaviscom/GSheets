import React from 'react';
import './App.css';
import Table from './components/Table';
import Formulabar from './components/Formulabar';
import Footer from './Footer';
import Header from './components/Header';
import Toolbar from './components/Actionbar';



function App() {
  return (
    <>
      <Header></Header>
      <Toolbar></Toolbar>
      <main>
        <Formulabar></Formulabar>
        <Table>home</Table>
      </main>
      <Footer></Footer>
      <div className="ui_overlay">
        <p>this is where the magic will happen</p>
      </div>
    </>
  );
}

export default App;
