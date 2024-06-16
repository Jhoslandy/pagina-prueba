import React from 'react'
import ReactPlayer from 'react-player'

export default function Contactos() {
  const videoprueba = "https://youtu.be/60606AHuq8c?si=3vm8serqUGPHN9fR"
  return (
    <div className='bodyContacto'>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>

        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <div style={{width:'100%', height:'50px', display: 'flex', alignItems: 'center', textAlign: 'center', margin: '120px 200px'}}>
          
          <ReactPlayer
              url={videoprueba} //Nos sirve para llamar a la URL
              playing={false} //Nos sirve para reproducir automac¿ticamente o no un video al cargar la pagina
              volume={0.5}  //Es para poner el volumen por defecto en este caso al 50%
              controls      //Para que aparezcan los controles de pausa y volumen
              width='50%'
              height='260px'
          />
        </div>
    </div>
  )
}
