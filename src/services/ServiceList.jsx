import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import CustomImage from '../assets/images/customization.png'


const serviceInfo =[
    {
        imgUrl: weatherImg,
        title: 'Calculate-Weather',
        desc: 'The weather is very pleasant'
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'This guide is very good at explaining places, musuems and everything'
    },
    {
        imgUrl: CustomImage,
        title: 'Customization',
        desc: 'Customization for the old one'
    },
]

const ServiceList = () => {
  return (
    <>
    {
      serviceInfo.map((item,index)=>
      <Col lg="3" key={index}>
          <ServiceCard item={item} />
      </Col>
      )
    }
    </>
  )
}

export default ServiceList