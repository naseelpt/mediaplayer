import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faInstagram,faTwitter,faLinkedin,faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
   <div className='container-fluid'>
      <div className='row '>
        <div className='col-md-4' >
        <h4><FontAwesomeIcon icon={faVideo} style={{color: "#897a43",}} className='ms-2 ' /> <span className='text-warning'>media player</span></h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia sint a quasi nemo ex aliquid? Quos qui minima ipsa quam, perferendis incidunt odit perspiciatis, itaque tenetur, officia quia sunt?</p>
        </div>
        <div className='col-md-2 d-flex justify-content-center' >
         <div>
            <h4 className=''>Links</h4>
            <Link to={'/'}><p className='mt-4'>landing page</p></Link>
           <Link to={'/home'}> <p>home page</p></Link>
            <Link to={'/watchHistory'}><p>watch history</p></Link>
         </div>
        </div>
        <div className='col-md-2 d-flex justify-content-cente' >
         <div>
            <h4>guids</h4>
            <p className='mt-4'>react bootsrap</p>
            <p>boots watch</p>
  
         </div>
        </div>
        <div className='col-md-4' >
          <h4>contact us</h4>
          
          <div className='d-flex mt-4'>
              <input type="text" placeholder='email id' className='form-control'/>
              <button className='btn btn-warning ms-3'>serach</button>
          </div>
          <div className='d-flex justify-content-between mt-4 fa-2x'>
          <FontAwesomeIcon icon={faInstagram} style={{color: "#62c520",}} />
          <FontAwesomeIcon icon={faFacebook} style={{color: "#74C0FC",}} />
          <FontAwesomeIcon icon={faTwitter} style={{color: "#74C0FC",}} />
          <FontAwesomeIcon icon={faLinkedin} style={{color: "#B197FC",}} />
          <FontAwesomeIcon icon={faWhatsapp} style={{color: "#41f50f",}} />

          </div>
        
        </div>
        
      </div>
   </div>
    </>
  )
}

export default Footer