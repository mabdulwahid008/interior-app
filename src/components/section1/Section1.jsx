import React, { useState } from 'react'
import './Section1.css'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import Header from '../header/Header'


function Section1() {

  const transition = {type: 'spring', duration:2}

  return ( 
    <div className="section1" id="section1">
      <Header/>
        <div className="left-1">
            <motion.img
            initial = {{width : 0}}
            whileInView = {{width : '100%'}}
            transition = {transition}
            src={img1} alt="" />
            <h2>build your<br/> dream home</h2>
        </div>

        <div className="right-1">
            <img src={img2} alt="" />
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus nibh vel justo feugiat</p>
            </div>
        </div>
        <div className="navigation">
              <Link to='section1' span={true} smooth={true}><button><i className="fa-solid fa-arrow-up"></i></button></Link>
         </div>
    </div>
  )
}

export default Section1