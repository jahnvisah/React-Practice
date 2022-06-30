import React from 'react'
import About from './About'
import Menu from './Menu'
import Services from './Services'
import Mobile from './Mobile'
import Contact from './Contact'
import Footer from './Footer'


export default function Home() {
  return (
    <>
        <section class="home" id="home">
                <div class="home__container bd-container bd-grid">
                    <div class="home__data">
                        <h1 class="home__title">Tasty food</h1>
                        <h2 class="home__subtitle">Try the best food of <br/> the week.</h2>
                        <a href="/" class="button">View Menu</a>
                    </div>
                   
                    <img src="/Images/home.png" alt="" class="home__img"/>
                    
                </div>
            </section> 

            <About />
            
            <Services />
            <Menu />
            <Mobile />
            <Contact />
            <Footer />

    </>
  )
}
