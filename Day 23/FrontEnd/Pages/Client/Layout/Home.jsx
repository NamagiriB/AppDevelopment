import React from 'react'
import Navbar from '../../../Components/Navbar'
import '../../../Assets/css/Home.css'
import { Footer } from '../../../Components/Footer'
import Product from './Products'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.naturesbasket.co.in/Images/Fruits-VegetablesNew.jpg?v=19" style={{width:'150px',height:'600px'}} class="d-block w-100" alt="..."/>
    
    
    </div>
    <div class="carousel-item">
      <img src="https://www.grocistore.com/admin/uploads/banners/web_banners/banner1576516931.JPG" style={{width:'150px',height:'600px'}} class="d-block w-100" alt="..." />
    
    </div>
    <div class="carousel-item">
      <img src="https://digianafresh.com/images/media/2022/04/J5Am108202.jpg" style={{width:'150px',height:'600px'}} class="d-block w-100" alt="..."/>
      
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