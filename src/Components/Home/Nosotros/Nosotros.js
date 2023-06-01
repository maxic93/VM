import React from 'react'
import styled from 'styled-components'
import foto from "../../../Img pages/Bienvenidos.jpeg"
import fotoGaleria1 from "../../../Img pages/fotogaleria1.jpeg"
import fotoGaleria2 from "../../../Img pages/fotogaleria2.jpeg"
import fotoGaleria3 from "../../../Img pages/fotogaleria3.jpeg"
import fotoGaleria4 from "../../../Img pages/fotogaleria4.jpeg"

const Nosotros = () => {

    const Section = styled.section`
    width: 100%;
    background-color: #f5f5f5;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
    const DivContainer1 = styled.div`
    min-width: 50%;
    padding: 20px;
    height: 1100px;
    .imgBienvenido {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 636px) {
        width: 100%;
        height: 850px;
    }
  
    `
    const DivContainer2 = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 10px;
    .img {
    width: 100%;
    height: 100%;
  }
    `
  return (
    <Section>
        <DivContainer1>
          <img className='imgBienvenido' alt='imagen' src={foto}/>
        </DivContainer1>
        <DivContainer2>
        <img className='img' alt='imagen' src={fotoGaleria1}/>
        <img className='img' alt='imagen' src={fotoGaleria2}/>
        <img className='img' alt='imagen' src={fotoGaleria3}/>
        <img className='img' alt='imagen' src={fotoGaleria4}/>
        </DivContainer2>
    </Section>
  )
}

export default Nosotros