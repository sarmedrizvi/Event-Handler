import React from 'react'
import './Footer.scss'

const raiseInvoiceClicked=()=>(
    // your axios call here
    // localStorage.setItem("pageData", "Data Retrieved from axios request")
    // route to new page by changing window.location
    window.open("", "_blank") //to open new page
)
const Footer1 = () => (
    <div className='footer1'>
        <div className='footer1-aboutus'>
            <h5 className='title'>About Us</h5>
            <p className='para'>We provide complete business solutions, which enables businesses to leverage leading edge technology to gain sustainable competitive advantages in today’s marketplace.</p>
        </div>
        <div className='footer1-quick'>
            <h5 className='title'>Quick Links</h5>
            <p className='para hover'>About Us</p>
            {/* <p className='para hover'>Services</p>
            <p className='para hover'>Testimonials</p> */}
            <p className='para hover'>Contact Us</p>
        </div>
        <div className='footer1-follow'>
            <h5 className='title'>Follow Us</h5>
            <p className='fa fa-facebook para hover'></p>
            <p className='fa fa-twitter para hover'></p>
            <p className='fa fa-instagram para hover'></p>
            <p className='fa fa-linkedin para hover'></p>
        </div>
        <div className='footer1-sub'>
            <h5 className='title'>Subscribe Newsletter</h5>
            <div className='footer1-sub-part'>
                <input type='text' className='footer1-sub-textbox' placeholder='Enter Email'></input>
                <button className='button' onClick={raiseInvoiceClicked}>Send</button>
            </div>
        </div>

    </div>
)

export const Footer = () => (

    <div className='footer'>
        <div>
            <Footer1 />
            <hr className='line'></hr>
            <h5 className='copyright'>Copyright ©2020 All rights reserved by EventHandler</h5>

        </div>
    </div>
)