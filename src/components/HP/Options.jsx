import './Options.css'
import { Link } from 'react-router-dom'
import React, {useState} from 'react'

const Options = (props) => {

    //const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    //const [menu_class, setMenuClass] = useState("menu hidden")
    //const [isMenuClicked, setIsMenuClicked] = useState(false)
    return(

<>
<div className="Options">
    <Link className='men' to={props.options}>
    <h4>{props.option}</h4>
    <img src={props.optionn} />
    </Link>
</div>



</>

    )
}
export default Options