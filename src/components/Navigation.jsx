import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
                    <Nav className="me-auto">
                    <Link to='/' className='text-white text-decoration-none ms-3'>Home</Link>
                    <Link to="/contacto" className='text-white text-decoration-none ms-3'>Contacto</Link>
                    </Nav>
            </Container>
        </Navbar>
);
}


export default Navigation