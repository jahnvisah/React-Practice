import React from 'react'

export default function Contact() {
  return (
    <>
      <div class="container-fluid6">
    <div class="map">
      <img src="/Images/map.jpg" alt=""/>
    </div>
    <div class="form">
      <div class="contact-clean">
        <form onsubmit="return false;">
            <h2 >Contact us</h2>
            <div class="form-group"><input class="form-control" type="text" name="name" placeholder="Name"/></div>
            <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email"/></div>
            <div class="form-group"><textarea class="form-control" name="message" placeholder="Message" rows="8"></textarea></div>
            <div class="form-group"><button class="btn btn-primary" type="submit">Send </button></div>
        </form>
    </div>
    </div>
  </div>
    </>
  )
}
