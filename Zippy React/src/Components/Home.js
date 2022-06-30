import React from 'react'
import Project from './Project'
import Team from './Team'
import Contact from './Contact'
import Cards from './Cards'
const cardData = [
    {title:'project Name 1',desc:'&nbsp;',BtnText:'hello 1',img:'/Images/p1.jpg'},
   
  ];


export default function Home() {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/Images/bg3.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                            <button class="btn btn-primary">Learn More</button>
                            <button class="btn btn-danger">Learn More</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/Images/bg2.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                            <button class="btn btn-primary">Learn More</button>
                            <button class="btn btn-danger">Learn More</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/Images/bg1.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                            <button class="btn btn-primary">Learn More</button>
                            <button class="btn btn-danger">Learn More</button>
                        </div>
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

            <div class="container my-4">
                <div class="item-1">
                    <h1>Welcome to Zippy</h1>
                </div>
                <div class="item-2">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus odit ut molestiae, voluptatem voluptas
                        dicta totam Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci praesentium ipsam rerum!</p>
                    <img src="/Images/umbrella.png" alt="" />
                </div>
                <div class="item-3">
                    <div class="cards">
                        <i class=" right-3 fa-5x fas fa-sms"></i>
                        <h6 class="sub">LOREM IPSUM</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur odit ex nulla earum harum. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Eligendi, voluptas!</p>
                        <div class="text-center"><button type="button" class="btn btn-primary text-center">Learn More</button></div>

                    </div>
                    <div class="cards">
                        <i class=" fa-5x fas fa-bell"></i>
                        <h6 class="sub">DOLOR SIT</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur odit ex nulla earum harum. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Eligendi, voluptas!</p>
                        <div class="text-center"><button type="button" class="btn btn-primary text-center">Learn More</button></div>
                    </div>
                    <div class="cards">
                        <i class=" fa-5x fas fa-envelope"></i>
                        <h6 class="sub">CONSECTETURE</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur odit ex nulla earum harum. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Eligendi, voluptas!</p>
                        <div class="text-center"><button type="button" class="btn btn-primary text-center">Learn More</button></div>
                    </div>
                </div>

  
            </div>
            <Project />
            <Team />
            <div className="container-fluid3 my-3 ">
                      <h1>Life In Zippy </h1>
                <div class="life">
                    <img src="/Images/life.jpg" alt=""/>
                </div>
            </div>
          
  <Cards menuuData={cardData} />
      
        

         
            <Contact />
        </>
    )
}
