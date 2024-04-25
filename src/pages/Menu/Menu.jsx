import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Options from '../../components/HP/Options'
const Menu = () => {
    return(
        <>




    <Link >
         <img src="https://www.acouplecooks.com/wp-content/uploads/2022/03/Goat-Cheese-Pizza-002.jpg" class="zoom"/>
   </Link>

   <Link>
         <img src="https://www.acouplecooks.com/wp-content/uploads/2022/06/Cheese-Fries-005.jpg" class="zoom"/>
   </Link>

   <Link>
         <img src="https://th.bing.com/th/id/R.f37e1460eac80c223d56b662efc87536?rik=DYFD9JtUdvg9tw&pid=ImgRaw&r=0" class="zoom"/>
   </Link>
 
<div className='tx'>
<h1 className='text2'>Main Course</h1>

<h1 className='text'>Appetizer</h1>

<h1 className='text3'>Drinks</h1>

</div>


        </>
    )
}

export default Menu