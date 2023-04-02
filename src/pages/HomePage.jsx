import React from 'react'


// My Components
import MyNav from '../components/MyNav'
import ControlledCarousel from '../components/ControlledCarousel';
import Products from '../components/Products'
import MyFooter from '../components/MyFooter';


export default function HomePage() {
  return (



    <div>
          <MyNav></MyNav>
          <ControlledCarousel></ControlledCarousel>
          <Products></Products>
          <MyFooter></MyFooter>
    </div>
  )
}
