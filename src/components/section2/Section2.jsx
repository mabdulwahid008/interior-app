import React from 'react'
import './Section2.css'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'

function Section2() {
  return (
    <div className="s-2 section" id="section2">
        <div className="section2">
            <div className="left-2">
                <img src={img3} alt="" />
            </div>

            <div className="mid-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus nibh vel justo feugiat</p>
            </div>

            <div className="right-2">
                <img src={img4} alt="" />
            </div>
        </div>

        <div>
            <h3>impeccable <br/>craftsmanship</h3>
        </div>
    </div>
  )
}

export default Section2