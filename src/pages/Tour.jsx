import CommonSection from '../subtitles/CommonSection'
import './Tour.css'
import SearchBar from '../subtitles/SearchBar'
import { Container,Row } from 'reactstrap'
import FeaturedTourList from '../components/featured-tours/FeaturedTourList'



const Tour = () => {

  return (
    <>
      <CommonSection title={'All Tours'} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      
    </>
  )
}

export default Tour