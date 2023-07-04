import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./images/Think Unlimited.jpg";
import { FaBars } from "react-icons/fa";
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom';
import Skills from './Skills';


function Header() {
  return (
    <div className='headd' >
      <Container>
        <Navbar expand="lg" >
          <Container className='navv mt-3'>
            <Navbar.Brand href="#home" ><img src={logo} className='logo'></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" ><FaBars className='togg' /></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="fs-5 head ms-auto ">
                <Nav.Link className='ms-5 skk'><Link to={"/"}>Home</Link></Nav.Link>
                <Nav.Link className='ms-5 skk' ><Link to={"/Skills"}>Skills</Link></Nav.Link>
                <Nav.Link className='ms-5 skk'><Link to={"/About"}>About</Link></Nav.Link>
                <Nav.Link className='ms-5 skk'><Link to={"/Contact"}>Contact</Link></Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;