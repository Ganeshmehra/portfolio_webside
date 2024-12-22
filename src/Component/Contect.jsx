import React from 'react'
import { FaFacebook,FaTwitter  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";


const Contect = () => {
  return (
    <>
    <div className='container mt-5' id='Contect'>
  
        <h1 class="text-center"><strong>Feedback Form</strong></h1>
        <form id="myForm"  data-aos="flip-right" data-aos-duration="1000">
            <div class="mb-3">
                <label for="name" class="form-label">Name:</label>
                <input type="text" class="form-control" id="name" name="name" required />
                <div id="nameError" class="text-danger"></div>
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" name="email" required />
                <div id="emailError" class="text-danger"></div>
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password:</label>
                <input type="password" class="form-control" id="password" name="password" required />
                <div id="passwordError" class="text-danger"></div>
            </div>

            <div class="mb-3">
                <label for="textarea" class="form-label">Textarea:</label>
                <textarea class="form-control" id="textarea" name="textarea" required ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>

        </form>
    </div>
             <footer className='text-center' data-aos="fade-down" data-aos-duration="1000" >
             <div>
             <FaFacebook className='mx-5 my-2 fs-3 'style={{cursor:"pointer", color:'#318dd8' }}/>
             <AiFillInstagram className='mx-5 my-2 fs-3 'style={{cursor:"pointer"  ,color:'#f61152' }}/>
             <FaTwitter className='mx-5 my-2 fs-3 '  style={{cursor:"pointer", color:'#69d5f5' }}/>
             < IoLogoLinkedin className='mx-5 my-2 fs-3 '  style={{cursor:"pointer" ,color:'#4f06b0'}}/>
             </div>
             </footer>
    </>
  )
}

export default Contect