import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import Homescreen from './screens/Homescreen'
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <Header />
        <main className='py-2'></main>
          <Container>
            <Routes>
              <Route path='/' element={<Homescreen />} exact/>
              <Route path='/product/:id' element={<ProductScreen />} />
            </Routes>
          </Container>
      <Footer />
    </Router>
  );
}

export default App;
