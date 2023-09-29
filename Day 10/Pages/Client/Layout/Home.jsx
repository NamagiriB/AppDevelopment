import React from 'react'
import Navbar from '../../../Components/Navbar'
import '../../../Assets/css/Home.css'
import { Footer } from '../../../Components/Footer'
import Product from './Product'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src='https://onlyhydroponics.in/cdn/shop/articles/WhatsApp_Image_2023-03-24_at_11.07.07_1024x1024.jpg?v=1681812060' style={{width:'100vw',height:'70vh'}}  alt="..."/>
    
    </div>
    <div class="carousel-item">
      <img src="https://s3-us-west-2.amazonaws.com/issuewireassets/primg/106838/order-farm-fresh-fruits-and-vegetables-in-dubai.jpg" class="d-block w-100" alt="..." />
    
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_1280.jpg" class="d-block w-100" alt="..."/>
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <Product/>
   
    <Footer/>

    </>
  )
}

export default Home