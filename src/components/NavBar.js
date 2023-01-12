import {Container, Navbar, Nav, NavbarBrand} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    //change color
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>{
        const onScroll = () =>{
            if (window.scrollY > 50) {
                setScrolled(true)
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        // since the function is onMount
        return () =>window.removeEventListener("scroll", onScroll);
    }, [])

    const OnUpdateActiveLink = (value)=>{
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home' ? 'active navbar-link': 'navbar-link'} onClick={()=>OnUpdateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#skill" className={activeLink==='skill' ? 'active navbar-link': 'navbar-link' } onClick={()=>OnUpdateActiveLink('skill')} >Skill</Nav.Link>
            <Nav.Link href="#project" className={activeLink==='project' ? 'active navbar-link': 'navbar-link'} onClick={()=>OnUpdateActiveLink('project')} >Project</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a target="_blank" href="https://www.linkedin.com/in/eva-li-5788ab1bb/"><img src={navIcon1} alt=""/></a>
                <a target="_blank" href="#"><img src={navIcon2} alt=""/></a>
                <a target="_blank" href="#"><img src={navIcon3} alt=""/></a>
            </div>
            <a href="https://www.linkedin.com/in/eva-li-5788ab1bb/" target="_blank" rel="noreferrer">
            <button className="vvd"><span>Let's Connect</span></button>
            </a>
            
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
