import React from 'react'
import './Section4.css'
import img5 from '../../images/img6.jpg'
import { motion } from 'framer-motion'

function Section4() {

    const mobile = window.innerWidth <= 768 ? true : false ;

    const transition = {type: 'spring', duration:4}
  return (
    <div className="section4" id="section4">
        <motion.div 
        // initial = {{x : mobile ? 0 :0}}
        // whileInView = {{x:0}}
        // transition = {transition}
        className="left-4">
            <h3>
                Stand out <br/> from everyone
            </h3>
        </motion.div>
        <div className="mid-4">
            <img src={img5} alt="" />
        </div>
        <motion.div
        // initial = {{x :  mobile ? 0 : 0}}
        // whileInView = {{x:0}}
        // transition = {transition}
        className="right-4">
            <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus nibh vel justo feugiat
            </p>
        </motion.div>
    </div>
  )
}

export default Section4