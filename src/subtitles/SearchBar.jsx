import React,{useRef} from 'react'
import './SearchBar.css'
import {Col,Form,FormGroup} from 'reactstrap'

const SearchBar = () => {

    const locationRef = useRef('')
    const distanceRef = useRef('')
    const maxPeopleRef = useRef('')

    const searchHandler = ()=>{
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxPeople=maxPeopleRef.current.value

        if (location==="" || distance==="" || maxPeople===""){
            alert("All fields are required");
        }
    }




  return <Col lg='12'>
      <div className="search__bar mt-5">
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class="ri-map-pin-line"></i></span>
                <div>
                    <p className="h6">Location</p>
                    <input type="text" placeholder='Where you want to go' ref={locationRef}/>
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class="ri-map-pin-time-line"></i></span>
                <div>
                    <p className="h6">Distance</p>
                    <input type="number" placeholder='Distance k/m' ref={distanceRef}/>
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-last'>
                <span><i class="ri-group-line"></i></span>
                <div>
                    <p className="h6">Max People</p>
                    <input type="number" placeholder='0' ref={maxPeopleRef}/>
                </div>
            </FormGroup>
            <span className='search__icon' type="submit" onClick={searchHandler}>
                <i class="ri-search-line"></i>
            </span>
        </Form>
      </div>
  </Col>
}

export default SearchBar