import React from 'react'

const Skils = () => {
  return (
    <>
     <div className="container" style={{width:"900px"}} id='Skils'>
      <h1>Technical Skils</h1>
      
      <div className="items d-flex align-items-center justify-content-center flex-wrap">
        <div className="item" data-aos="flip-left" data-aos-duration="1000">
          <img src="https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg" alt="" />
          <h2>Html</h2>
        </div>
        <div className="item" data-aos="flip-right" data-aos-duration="1000">
          <img src="https://w7.pngwing.com/pngs/4/808/png-transparent-css3-css3-logo-logo-language-programming-language-css-3d-icon-thumbnail.png" alt="" />
          <h2>Css</h2>
        </div>
        <div className="item" data-aos="flip-left" data-aos-duration="1000">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png" alt="" />
          <h2>Javascript</h2>
        </div>
        <div className="item" data-aos="flip-right" data-aos-duration="1000">
          <img src="https://external-preview.redd.it/ZTKVCne_ZlanhjrqBm4x7_-TLSAsvqukF6oAB3y8ZAI.jpg?width=640&crop=smart&auto=webp&s=fa3b24c6880d8626b13fc115bbefb36cb5cd006c" alt="" />
          <h2>React js</h2>
        </div>
        <div className="item" data-aos="flip-left" data-aos-duration="1000">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqwnOIkb9q-b1M5qgAtaBhfUzkinUA2MSuA&s" alt="" />
          <h2>Bootstrap</h2>
        </div>
      </div>
      
      </div> 
    
    </>
  )
}

export default Skils