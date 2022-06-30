import React,{useState} from 'react'
import Card from './Card';
const cardData = [
    {title:'Barbecue salad',desc:'Delicious dish',price:'$22.00',img:'/Images/plate1.png'},
    {title:'Salad with fish',desc:'Delicious dish',price:'$12.00',img:'/Images/plate2.png'},
    {title:'Spinach salad',desc:'Delicious dish;',price:'$9.50',img:'/Images/plate3.png'},
];
export default function Menu() {
    const[weekMenu, setWeekMenu] = useState('');
  return (
    <div>Menu
  <div class ="row pt-5"></div>
  <Card weekMenu={cardData} />

    </div>
  )
}
