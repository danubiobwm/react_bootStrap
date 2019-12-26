import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap';

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Outras Opções" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Posts">Posts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Desevolvimento
              </NavDropdown.Item>
              <NavDropdown.Item href="/digimon">API Digimon</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Novo</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />

            <Button variant="outline-light">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
