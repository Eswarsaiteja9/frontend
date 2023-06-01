import React, {useRef,useEffect} from 'react'
import {Container, Row, Button} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/images/travel1.jpg'
import './Header.css'

const nav__links= [
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
    display: 'Tours'
  },


]

const Header = () => {

  const headerRef = useRef(null)

  const fixedHeader = () => {
    window.addEventListener('scroll', () =>{
      if(document.body.scrollTop >80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header')
      }
      else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    fixedHeader()

    return window.removeEventListener('scroll', fixedHeader)
  })



  return <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          {/*-----------logo-------------*/}
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          {/*-----------logo end-------------*/}

          {/*-----------Menu Start-------------*/}
          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
              {
                nav__links.map((item,index)=>(
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={nav=>nav.isActive?'active__link':''}>{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          {/*-----------Menu end-------------*/}
          <div className="nav__right d-flex align-items-center gap-4">
            <div className="nav__btns d-flex align-items-center gap-4">
              <Button className="btn secondary__btn">
                <Link to='/login'>Login</Link>
              </Button>
              <Button className="btn btn-danger">
                <Link to='/register'>Register</Link>
              </Button>
            </div>
            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>

        </div>
      </Row>
    </Container>
  </header>
}

export default Header