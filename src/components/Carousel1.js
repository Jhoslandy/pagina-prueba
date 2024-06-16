import React from 'react'

export default function Carousel1() {
  return (
    <div className='Car1'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <h2 className="Titulo-carrusel">Descuentos 50% y Promos 2X1</h2>
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://i.pinimg.com/originals/a3/e0/6c/a3e06c8f7b389ecacdbcd59f2b29fc17.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://i.pinimg.com/originals/a3/e0/6c/a3e06c8f7b389ecacdbcd59f2b29fc17.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://i.pinimg.com/originals/a3/e0/6c/a3e06c8f7b389ecacdbcd59f2b29fc17.jpg" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}
