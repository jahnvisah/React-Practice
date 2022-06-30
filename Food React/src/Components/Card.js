import React from 'react'

export default function Card(props) {
    return (
        <>
         
         <section className="menu section bd-container" id="menu">
          <span className="section-subtitle">Special</span>
          <h2 className="section-title">Menu of the week</h2>
          
          
          <div className="menu__container bd-grid">
          {props.weekMenu.map((curElem) => {
         
          return  (
            
                    
                    <div className="menu__content" >
                        <img src={curElem.img} alt="" />
                        <h3> {curElem.title}</h3>
                        <span> {curElem.desc}</span>
                        <span>{curElem.price}</span>
                        <a href="/" className="button menu__button"><i className='bx bx-cart-alt'></i></a>
                    </div>
                   
                   
                   
                   
                   )
                   
                }
                )}
       
                </div>
       </section>
        </>
    )
}
