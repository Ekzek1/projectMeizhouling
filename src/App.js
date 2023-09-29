import React from 'react';
import Header from './components/header/Header';
import Title from './components/title/Title';
import Catalog from './components/catalog/Catalog';
import Advantages from './components/advantages/Advantages';
import Reviews from './components/reviews/Reviews';
import Order from './components/order/Order';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Header/>
      <Title/>
      <Catalog/>
      <Advantages/>
      <Reviews/>
      <Order/>
      <Footer/>
    </>
  );
}

export default App;
