import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Contact() {
  return (
    <div>
      <AnimationOnScroll animateIn="animate__fadeInDown">
        <section class="contact section bd-container" id="contact">
                <div class="contact__container bd-grid">
                    <div class="contact__data">
                        <span class="section-subtitle contact__initial">Let's talk</span>
                        <h2 class="section-title contact__initial">Contact us</h2>
                        <p class="contact__description">If you want to reserve a table in our restaurant, contact us and we will attend you quickly, with our 24/7 chat service.</p>
                    </div>

                    <div class="contact__button">
                        <a href="#" class="button">Contact us now</a>
                    </div>
                </div>
            </section>
            
            </AnimationOnScroll>
    </div>
  )
}
