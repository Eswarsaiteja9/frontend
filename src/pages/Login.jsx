import React, {useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { Container ,Row,Col,Form,FormGroup,Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

import loginImg from '../assets/images/login.png'


const Login = () => {

  const [credentials, setCredentials] = useState({
    email:undefined,
    password:undefined
  })

  const handleChange = event => {
    setCredentials(prev => ({ ...prev, [event.target.id]: event.target.value }))
  };

  const handleClick = event => {
    event.preventDefault();
  }



  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="Login Icon" />
              </div>
              <div className="login__form">
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' required id='password' onChange={handleChange} />
                  </FormGroup>
                  <Button className='btn btn-dark auth__btn' type="submit">Login</Button>
                </Form>
                <p>Don't have an account? <Link to='/register'>Register</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login