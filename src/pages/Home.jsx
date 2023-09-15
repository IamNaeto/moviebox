import React from 'react';
import '../App.css'
import Hero from '../../components/Hero';
import MoviesContainer from '../../components/MoviesContainer'; 
import Footer from '../../components/Footer';

const Home = () => {
  return ( 
    <>
    <Hero />
    <MoviesContainer />
    <Footer />
    </>
   );
}
 
export default Home;