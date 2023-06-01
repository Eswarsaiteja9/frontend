import React,{useRef,useState} from 'react'
import './TourDetails.css'
import { Container,Row,Col ,Form,ListGroup} from 'reactstrap'
import { useParams } from 'react-router-dom'
import TourData from '../assets/data/tours'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/booking/Booking'


const TourDetails = () => {

  const {id} = useParams()
  const reviewMsgRef = useRef('')
  const [tourRating,setTourRating] = useState(null)

  const tour = TourData.find(tour => tour.id === id)

  const {photo,title,desc,price,reviews,city,distance,maxGroupSize} = tour

  const totalRating = reviews?.reduce((acc,item)=>acc+item.rating,0)
  const avgRating = totalRating===0 ? '' : totalRating === 1 ? totalRating : (totalRating / reviews?.length).toFixed(1);

  const options = {day:'numeric', month:'long', year:'numeric'};

  //submit request
  const submitHandle = (event) => {
    event.preventDefault()
    const reviewText = reviewMsgRef.current.value;

    alert(`${reviewText} ${tourRating}`)

  }

  return (
  
    <>

      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />
                <div className='tour__info'>

                  <h2>{title}</h2>

                  <div className="card__top d-flex align-items-center justify-content-between">
                    <span className='tour__rating d-flex align-items-center gap-1'>
                      <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? 'Not rated' : (<span>({reviews?.length})</span>)}
                    </span>
                  </div>
                  <div className="tour__extra__details">
                    <span><i class="ri-map-pin-2-line"></i>{city}</span>
                    <span><i class="ri-money-dollar-circle-line"></i>${price}/per person</span>
                    <span><i class="ri-map-pin-time-line"></i>{distance} K/m</span>
                    <span><i class="ri-group-line"></i>{maxGroupSize} people</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/**-------reviews section start--------- */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandle}>
                    <div className="d-flex align-items-center gap-2 mb-4 rating__group">
                      <span onClick={()=> setTourRating(1)}>
                        1<i class="ri-star-s-fill p-1"></i>
                      </span>
                      <span onClick={()=> setTourRating(2)}>
                        2<i class="ri-star-s-fill p-1"></i>
                      </span>
                      <span onClick={()=> setTourRating(3)}>
                        3<i class="ri-star-s-fill p-1"></i>
                      </span>
                      <span onClick={()=> setTourRating(4)}>
                        4<i class="ri-star-s-fill p-1"></i>
                      </span>
                      <span onClick={()=> setTourRating(5)}>
                        5<i class="ri-star-s-fill p-1"></i>
                      </span>
                    </div>

                    <div className="review__input">
                      <input type="text" ref={reviewMsgRef} placeholder='  Share your thoughts' required/>&nbsp;&nbsp;
                      <button className='btn btn-success text-white' type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className='user__reviews'>
                    {
                      reviews?.map(review=>(
                        <div className="review__item">
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>Steve</h5>
                                <p>{new Date("05-29-2023").toLocaleDateString("en-US",
                                  options
                                )}
                                </p>
                              </div>
                              <span className='d-flex align-items-center'>
                                5<i class="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>Amazing Tour</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                </div>

                {/**-------reviews section end----------- */}

              </div>
            </Col>
            <Col lg="4">
              <Booking tour={tour} />
            </Col>
          </Row>
        </Container>
      </section>


    </>
  )
  };

export default TourDetails