import React, { useEffect, useState } from 'react'
import pdf from "../Resume/ganeshResume.pdf"
import img from "../assets/image/Ganesh.jpg"

function Home() {
  const titles = ["Web Developer", "Front-End Developer", "Back-End Developer"];
  const [datatitles, setDatatitles] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDatatitles((prevIndex) => (prevIndex + 1) % titles.length);
    }, 1000); // Change title every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [titles.length]);
  
  return (
    <>
  <div className="container d-flex align-items-center justify-content-between " style={{height:"80vh"}} id='Home'>
    <div className="leftbox text-center" data-aos="fade-up-right" data-aos-duration="1000">
        <h1><h1>{titles[datatitles]}</h1></h1>
    <a href={pdf} download="Resume" class="btn btn-outline-info">Download resume</a>
    </div>
    <div className="right" data-aos="fade-up-left" data-aos-duration="1000">
       <div className="img"> 
        <img src={img} alt="error" />
        </div>
    </div>
  </div>
    </>
  )
}

export default Home