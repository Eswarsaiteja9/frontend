import React from 'react'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../../router/Routers'

const RootLayout = () => {
  return <>
       <Header />
       <Routers />
       <Footer /> 
  </>
}

export default RootLayout