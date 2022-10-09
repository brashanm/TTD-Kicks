import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <>
      <Header />
      <main className='py-2'></main>
        <Container>
          <h1>Welcome to TTD Kicks</h1>
        </Container>
      <Footer />
    </>
  );
}

export default App;
