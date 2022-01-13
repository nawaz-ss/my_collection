import { Component } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <section className='header'>
                <Navbar bg="dark" variant='dark' expand="lg">
                    <Container className='px-2'>
                        <NavLink to="/" className='nav-link fw-bold px-0'>Geo-Me</NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <NavLink to="/" className='nav-link'>Home</NavLink>
                                <NavLink to="/projects" className='nav-link'>Projects</NavLink>
                            </Nav>
                            <div className=''>
                                <NavLink to='/sign-in'>
                                <Button variant='primary mx-2'>Sign In</Button>
                                </NavLink>
                                
                                <NavLink to='/sign-up'>
                                <Button variant='info mx-2'>Sign Up</Button>
                                </NavLink>
                            </div>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </section>
        )
    }
}
