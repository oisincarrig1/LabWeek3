import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';

class App extends React.Component{
  render(){
  return (
    <Router>
    <div className="App">
      {/* create navbar to navigate webpage using react bootstrap */}
     <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* change urls  */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* react-router-dom imported to use client routing and change url */}
    <Routes>
      {/* add Content component to home page */}
      <Route path ='/' element={<Content />} /> 
      {/* add Header component to read page */}
      <Route path = '/read' element={<Header />} />
      {/* add footer component to create page */}
      <Route path = '/create' element={<Footer />} />
    </Routes>
    </div>
    </Router>
    //   <Header />
    //  <Content></Content>
    //  <Footer />
  );
  }
}
export default App;
