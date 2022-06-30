import React, { useEffect } from 'react'

import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function About() {

  useEffect(() => {
      console.log('hello World');

      return ()=>{
        console.log('bye World');
      }
  }, [])
  
  
  return (
    <div>
      <section className="about section bd-container" id="about">
        <div className="about__container  bd-grid">
          <div className="about__data">
            <AnimationOnScroll animateIn="animate__pulse" initiallyVisible={true}>
              <span className="section-subtitle about__initial">About us</span>
              <h2 className="section-title about__initial">We cook the best <br /> tasty food</h2>
              <p className="about__description">We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us.</p>
              <a href="/" className="button">Explore history</a>
            </AnimationOnScroll>
          </div>
          <AnimationOnScroll animateIn="animate__backInDown" initiallyVisible={true}>
            <img src="/Images/about.jpg" alt="" className="about__img" />
          </AnimationOnScroll>
        </div>
      </section>

    </div>
  )
}
