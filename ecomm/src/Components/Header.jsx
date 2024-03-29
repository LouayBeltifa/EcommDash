import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'

function Header() {
    let user = JSON.parse(localStorage.getItem("user-info"))
    const navigate = useNavigate();

    function logOut(){
        localStorage.clear();
        navigate("/login")
    }
    return (
        <div>
             <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand><Link to="/">Ecomm Dashboard</Link></Navbar.Brand>
                <Nav className="me-auto navbar-warapper">

                    {
                        localStorage.getItem('user-info') ? 
                        <>
                            <Link to="/add">Add Products</Link>
                            <Link to="/update">Update Products</Link>
                        </>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    }
                </Nav>
                {
                    localStorage.getItem("user-info") ?
                    <Nav>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    :
                    null

                }
                
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
