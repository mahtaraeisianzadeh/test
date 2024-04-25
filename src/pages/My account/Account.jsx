import './Account.css'
import { useState } from 'react'
import  {Button } from 'react-bootstrap'


const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/


const Account = (props) => {


    const [ inputVal , setInputVal] = useState ('')
    const [ regexError , setRegexError ] = useState (true)

    
    function handelclick(){
    const inputPhoneRegexTest = phoneRegex.test(inputVal)
    const inputEmailRegexTest = emailRegex.test(inputVal)

    if(inputPhoneRegexTest || inputEmailRegexTest){
        console.log('regex test true')
        setRegexError(true)
    }
    else{
        console.log('regex test false')
       setRegexError(false)
    }
}


const form = document.querySelector('form');
form.addEventListener('submit' , validate);

function validate(event){
	const user = document.getElementById('user');
	const pass = document.getElementById('pass');
	const usererror = document.getElementById('usererror');
	const passerror = document.getElementById('passerror');
	usererror.textContent = '';
	passerror.textContent = '';
	if(user.value.length < 5 || user.value.length > 15){
		usererror.textContent = 'نام کاربری باید 5 تا 15 کاراکتر باشد';
		event.preventDefault();
	}
	if(pass.value.length < 6 || pass.value.length > 20){
		passerror.textContent ='کلمه‌ی عبور باید 6 تا 20 کاراکتر باشد';
		event.preventDefault();
	}
}

    return(
        <div >
            
<h3 >وررود / ثبت نام</h3>
        <div className='box2'>
		<form action='/'>
	<label>نام کاربری</label>
	<input type="text" name="user" id="user" />
	<span id="usererror"></span><br /><br />
	<label>کلمه‌ی عبور</label>
	<input type="password" name="pass" id="pass" />
	<span id="passerror"></span><br /><br />
	<button className='btn' onClick={validate} type="submit">ورود</button>
</form>
        </div>




<Button {...props} onClick= {handelclick } className='btn-outline-warning'>submit</Button>

</div>

//<p className='px'>username</p>
//<input className='input1' type="text" placeholder="username"/>

//<p className='px'>email/phone number</p>

//<input value={inputVal } onChange={(e) => setInputVal(e.target.value)}  className='input1' type="email" placeholder="email/phone numbe"/>

//<small  className={` ${regexError ? 'd-none' : 'd-block'}`} >error</small>
		
    )
}

export default Account 