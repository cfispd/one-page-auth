import { Container } from "react-bootstrap";
// import { Container, Col, Row } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import FreeComponent from "./FreeComponent";
// import AuthComponent from "./AuthComponent";
// import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Container>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Chat Bot</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Sign up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/register" element={<Register />} /> 
        <Route exact path="/login" element={<Login />} />
      </Routes>

    </Container>
  );
}

export default App;
