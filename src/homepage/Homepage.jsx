import './Homepage.css'
import Options from '../components/HP/Options'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { MDBCarousel,MDBCarouselItem, } from 'mdb-react-ui-kit';
//import { slide as Menu } from 'react-burger-menu';


//const CustomBurgerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
//<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
//</svg>; 

const Homepage = () => {

  

    return(
        <>

      
<h1 className='del'>Delicious</h1>

<Link to="">
  <svg className='basket' xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
  </svg>
</Link>

<div className='searchinput'  >
    <form id="searchForm" method='get' name="searchForm" action="http://google.com/search" >
    <input  className='input' type="text"  maxlength="200" id="gsearch"  placeholder="search" name="gsearch"/>
    <input className='search' type="submit"/>
</form>
</div>
      <div className='option'>
        <Options options='/Menu' option='MENU'/>
        <Options options='/Sup' option='SUPPORT'/>
        <Options options='/Account' option='MY ACCOUNT'/>
      </div>
     
      <MDBCarousel showControls >
        <MDBCarouselItem

        className='foodphoto '
        itemId={1}
        src='https://www.acouplecooks.com/wp-content/uploads/2022/03/Goat-Cheese-Pizza-002.jpg'/>
    
      <MDBCarouselItem
        className='foodphoto  '
        itemId={2}
        src='https://www.recipetineats.com/wp-content/uploads/2022/09/Fries-with-rosemary-salt_1.jpg'/>
     
      <MDBCarouselItem
        className='foodphoto '
        itemId={3}
        src='https://www.acouplecooks.com/wp-content/uploads/2022/06/Cheese-Fries-005.jpg'/>
   
      <MDBCarouselItem
        className='foodphoto '
        itemId={4}
        src='https://www.skinnytaste.com/wp-content/uploads/2022/03/Air-Fryer-Steak-6.jpg'/>
   
      <MDBCarouselItem
        className='foodphoto '
        itemId={5}
        src='https://heygrillhey.com/static/47c08cf31c9c6df778aee3088264eddf/Smoked-Hamburgers-Feature.png'/>
   
      <MDBCarouselItem
        className='foodphoto '
        itemId={6}
        src='https://images.themodernproper.com/billowy-turkey/production/posts/ChickenFettuccineAlfredo_11.jpg?w=1200&h=1800&q=82&fm=jpg&fit=crop&dm=1675190172&s=3fe52acb16ba5ac3c23e3af42d941c49'/>
   
    </MDBCarousel>

<div className='box'>
    <p>phone number: 02122583032</p>
    <p>address: Tehran-pasdaran-bostan5-p43</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
    <p className='insta'>Delicious_bg</p>
</div>

{/*
<div id="contentsearch">
  <form id="searchForm" name="searchForm" action="http://google.com/search">
    <input name="q" type="text"  maxlength="200" />
    <input name="q" type="hidden" />
    <input name="submit" type="submit" value="Search" />
  </form>
</div>
*/}

{/*
<Menu customBurgerIcon={ <CustomBurgerIcon /> }>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
    </Menu>
*/}
        </>
    )
}

export default Homepage