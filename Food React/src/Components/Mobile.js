import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Moblie() {
  return (
    <div>
          <section class="app section bd-container">
                <div class="app__container bd-grid">
                    <div class="app__data">
                    
                        <span class="section-subtitle app__initial">App</span>
                        <h2 class="section-title app__initial ">App is aviable</h2>
                        <h2 class="section-title app__initial">App is aviable</h2>
                        <p class="app__description">Find our application and download it, you can make reservations, food orders, see your deliveries on the way and much more.</p>
                        
                        <div class="app__stores">
                       
                            <a href="#"><img src="/Images/app1.png" alt="" class="app__store" /></a>
                            <a href="#"><img src="/Images/app2.png" alt="" class="app__store"/></a>
                           
                        </div>
                    </div>
                    <AnimationOnScroll animateIn="animate__backInLeft">
                    <img src="/Images/movil-app.png" alt="" class="app__img"/>
                    </AnimationOnScroll>
                </div>
            </section>
    </div>
  )
}
