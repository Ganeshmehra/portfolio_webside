import React from 'react'

function Navbar() {
    return (
        <>
            <div className="container d-flex align-items-center justify-content-between" data-aos="fade-down" data-aos-duration="1000">
                <div className="left nav_item">Portfolio</div>
                <div className="right">
                    <a href="#Home" className="nav_item">Home</a>
                    <a href="#Skils" className="nav_item">Skils</a>
                    <a href="#Project" className="nav_item">Projects</a>
                    <a href="#Contect" className="nav_item">Contect</a>
                </div>

            </div>

        </>
    )
}

export default Navbar