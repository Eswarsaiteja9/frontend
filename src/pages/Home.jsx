import React from 'react'
import './Home.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Paris from '../assets/images/paris.avif'
import travelGuide from '../assets/images/guide.avif'
import Subtitle from '../subtitles/Subtitle'
import SearchBar from '../subtitles/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/featured-tours/FeaturedTourList'
import MasonryLayout from '../components/gallery/MasonryLayout'

const Home = () => {
  return <>

  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='hero__content'>
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle subtitle={'Know everything before travelling'}/>
              <img src={Paris} className='paris' alt=""/>
            </div>
            <h1>Travelling around the world is the way to create beautiful <span className='highlight'>memories</span></h1>
            <p>Travelling with family & friends gives a feeling that no one expresses in a word that beautiful feeling need to be felt by everyone who is willing to travel with them.</p>
          </div>
        </Col>
        <Col lg="2">
          <div className="hero__img-box mt-5">
            <img src={heroImg} alt="Hero Image"/>
          </div>
        </Col>
        <Col lg="2">
          <div className="hero__img-box mt-4">
            <img src={heroImg02} alt="Hero Image"/>
          </div>
        </Col>
        <Col lg="2">
          <div className="hero__img-box">
            <video src={heroVideo} alt="Hero Video" controls/>
          </div>
        </Col>
        <SearchBar />
      </Row>
    </Container>
  </section>
  <section>
    <Container>
      <Row>
        <Col lg="3">
          <h6 className="services__serve">What we serve</h6>
          <h2 className='Services'>We offer our best services</h2>
        </Col>
        <ServiceList />
      </Row>
    </Container>
  </section>

  {/**---------------Tour Section start----------------- */}
  <section>
    <Container>
      <Row>
        <Col lg="12" className='mb'>
          <p className='sideheading'>Explore</p>
          <h2 className='featured_tour-title mb-5'>Our Featured Tours</h2>
        </Col>
        <FeaturedTourList />
      </Row>
    </Container>
  </section>

  {/**---------------Tour Section end------------------- */}

  {/**---------------Experience Section start------------------- */}
  <section>
    <Container>
      <Row>
        <Col lg="6">
          <div className="experience__content">
            <p className="sideheading">Experience</p>
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
  {/**---------------Experience Section End------------------- */}

  {/**----------------Gallery Section Start------------------- */}
  <section>
    <Container>
      <Row>
        <Col lg="12">
          <p className="sideheading">Gallery</p>
          <h2 className='gallery__title mb-3'>Visit our customers tour gallery</h2>
        </Col>
        <Col lg="12">
          <MasonryLayout />
        </Col>
      </Row>
    </Container>
  </section>

  <hr/>
  {/**=================Gallery Section End---------------------*/}
  
  </>
}

export default Home