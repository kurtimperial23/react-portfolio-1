import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import 'animate.css';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return( 
        <Navbar expand="md" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home" className='animate__animated animate__backInLeft'>
             <img src={logo} alt='Imperial'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={`animate__animated animate__backInLeft ${activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')`} >Home</Nav.Link>
              <Nav.Link href="#skills" className={`animate__animated animate__backInLeft ${activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')`}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={`animate__animated animate__backInLeft ${activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')`}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>npm 
                    <a href='https://www.linkedin.com/in/kurt-hydein-p-imperial-a89a96267/' target='react/jsx-no-target-blank' className='animate__animated animate__backInRight'><img src={navIcon1} alt=''/></a>
                    <a href='https://web.facebook.com/kurt.impe' target='react/jsx-no-target-blank' className='animate__animated animate__backInRight'><img src={navIcon2} alt=''/></a>
                    <a href='https://z-p3.www.instagram.com/kurt.impe/' target='react/jsx-no-target-blank' className='animate__animated animate__backInRight'><img src={navIcon3} alt=''/></a>
                </div>
                <button className='vvd animate__animated animate__backInRight' onClick={() => console.log('connect')}><span>Collaborate</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;