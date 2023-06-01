import React from 'react'
import './Footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/travel1.jpg'


const redirect__links= [
  {
    path:'/home',
    display: 'Home'
  },
  {
    path:'/about',
    display: 'About'
  },
  {
    path:'/tour',
    display: 'Tour'
  },
]

const redirect__links2= [
  {
    path:'/home',
    display: 'Home'
  },
  {
    path:'/login',
    display: 'Login'
  },
  {
    path:'/register',
    display: 'Register'
  },
]


const Footer = () => {

  const day = new Date().getDate()
  const month = new Date().getMonth() + 1
  const year = new Date().getFullYear()


  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="LOGO" />
              <p>Shake hands with us we will takecare of everything what you wanted to see</p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><i class="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-instagram-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-github-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className='footer__link'>Discover</h5>
            <ListGroup className='footer__redirect'>
              {
                redirect__links.map((item,index)=>(
                  <ListGroupItem className='ps-0 border-0' key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className='footer__link'>Redirect Links</h5>
            <ListGroup className='footer__redirect'>
              {
                redirect__links2.map((item,index)=>(
                  <ListGroupItem className='ps-0 border-0' key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className='footer__link'>Contact Us</h5>
            <ListGroup className='footer__redirect'>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap02'>
                      <span><i class="ri-map-pin-line"></i></span>
                      Address:
                    </h6>
                    <p className='mb-0'>Narsapur, Andhra Pradesh</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap02'>
                      <span><i class="ri-mail-line"></i></span>
                      Email:
                    </h6>
                    <p className='mb-0'><a href="mailto:eswarsaiteja329@gmail.com">eswarsaiteja329@gmail.com</a></p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap02'>
                      <span><i class="ri-phone-fill"></i></span>
                      Phone:
                    </h6>
                    <p className='mb-0'><a href="tel:1234567890">1234567890</a></p>
                  </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12" className='text-center pt-5'>
            <p className='copyright'>Travel &copy; copyright {day}-{month}-{year} All Rights Reserved By 22772258</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer