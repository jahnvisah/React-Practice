import React, { useState } from 'react'
import Cards from './Cards'
const cardData = [
  {title:'project Name 1',desc:'&nbsp;',BtnText:'hello 1',img:'/Images/p1.jpg'},
  {title:'project Name 2',desc:'&nbsp;',BtnText:'hello 2',img:'/Images/p2.jpg'},
  {title:'project Name 3',desc:'&nbsp;',BtnText:'hello 3',img:'/Images/p3.jpg'},
  {title:'project Name 4',desc:'&nbsp;',BtnText:'hello 4',img:'/Images/p4.jpg'},
  


];

export default function Project() {
  const[menuuData, setMenuuData] = useState('');
  return (
    <>
     <h1>Projects</h1>


  <Cards menuuData={cardData} />
 

  <div class="container-fluid2 my-4">
    <h1>Video Projects</h1>
    <video controls class="video1">
      <source src="/Images/v1.webm" type="video/webm"/>
    </video>
    <video controls class="video2">
      <source src="/Images/v2.mp4" type="video/mp4"/>
    </video>
    </div>

    

  
  
    

  
    </>
  )
}
