import React from 'react'
import travelGuide from '../assets/images/guide.avif'
import { Container,Row,Col } from 'reactstrap'

const About = () => {
  return (
    <section>
    <Container>
      <Row>
        <Col lg="6">
          <div className="experience__content">
            <p className="sideheading">About us</p>
            <h2>With all our experience <br />we will guide you</h2>
            <p>
              Guides in our travels are very fond of all places, museums,temples etc.
              <br/>
              They will guide you according to wherever you want to go.
            </p>
          </div>

          <div className="counter__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span>12k</span>
              <h6>Successful Trips</h6>
            </div>
            <div className="counter__box">
              <span>2k+</span>
              <h6>Regular Clients</h6>
            </div>
            <div className="counter__box">
              <span>5</span>
              <h6>Years Experience</h6>
            </div>
          </div>
        </Col>
        <Col lg="6">
          <div className="experience__logo">
            <img src={travelGuide} height={'400px'} alt="Travel Guide" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default About