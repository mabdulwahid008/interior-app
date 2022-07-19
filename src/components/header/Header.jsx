import React, { useRef, useState } from 'react'
import './Header.css'
import { Link } from 'react-scroll'
import emailjs from '@emailjs/browser';

function Header() {

  const form = useRef();
  const [email, setEmail] = useState('');
  const [confirmMsg, setConfirmMsg] = useState('');

  const onchange = (e) => {
    setEmail(e.target.value)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    const div = document.getElementById('confirm-msg');
    div.style.display = 'flex';

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    if(email.charAt(email.length-4) !== '.' && email.charAt(email.length-3) !== '.'){
        setConfirmMsg('Please enter correct email.')
        div.style.backgroundColor = 'rgba(255, 2, 2, 0.308)'
    }
    else if(regEx.test(email)  && email !== "")
    { 
        emailjs.sendForm('service_y3abb9f', 'template_hdxfycv', form.current, 'oY63AILGcuWc9_TgX')
          .then((result) => {
              setConfirmMsg('Form sent successfully.');
              div.style.backgroundColor = 'rgba(2, 255, 19, 0.316)'
          }, (error) => {
              setConfirmMsg("There's issue with server, please try again later.")
              div.style.backgroundColor = 'rgba(255, 2, 2, 0.308)'
          });
      }
      setTimeout(()=>{
       div.style.display = 'none';
       div.style.backgroundColor = 'white';
       setConfirmMsg('');
      }, 5000)
  };

  return (
    <div className="header">
              <input id='menu_toggle' type='checkbox'/>
              <div className='bars' htmlFor='menu_toggle'>
                <div></div>
                <div></div>
              </div>

              <div className='header-text'>
                  <h2><Link to='section1' span={true} smooth={true}>Interior</Link></h2>
              </div>

              <div className="side">
                <div>
                  <h4>Say<br/> hello to me!!!</h4>
                  <form ref={form} onSubmit={sendEmail}>
                    <input type='email' name='user-email' placeholder='Enter your email' value={email} onChange={onchange}/><br/>
                    <textarea name="textarea" rows='5' cols='20' placeholder='Write something'></textarea>
                    <button className='btn'>Submit</button>
                  </form>
                  <div id='confirm-msg'>
                    {confirmMsg}
                  </div>
                </div>
                <div>
                  Developed By<br/> Muhammad Abdulwahid
                  <div>
                      <a href='mailto:m.abdulwahid008@gmail.com' target='#BLANK'><i className="fa-solid fa-envelope icon"></i></a>
                      <a href='https://github.com/mabdulwahid008' target='#BLANK'><i className="fa-brands fa-github icon"></i></a>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Header