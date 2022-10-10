import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap'
import Homescreen from './screens/Homescreen';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-2'></main>
        <Container>
          <Homescreen />
        </Container>
      <Footer />
    </>
  );
}

export default App;
