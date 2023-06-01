import React from 'react'
import styled from 'styled-components'
import foto from "../../Img pages/envios.jpeg"

const Envios = () => {

    const Section = styled.section`
        width: 100%;
        height: 100%;
        display: flex;
        padding: 20px;
        flex-direction: column;
        align-items: center;
    `
    const Title = styled.h2`
      padding: 30px;
      font-size: 2.3em;
      @media (max-width: 700px) {
        font-size: 1.4em;
        padding: 15px;
      }
    `
    const ContainerImg = styled.div`
      width: 100%;
      .img {
        width: 100%;
      }
    `
    const Contenido = styled.div`
      font-size: 1.5em;
      margin-top: 5px;
      .colorBlack {
        font-weight: 800;
      }
      @media (max-width: 718px) {
        font-size: 1em;
      }
      @media (max-width: 400px) {
        font-size: .8em;
      }
    `

  return (
    <Section>
      <Title>¡Qué bueno que llegaste! Te estábamos esperando.</Title>
      <ContainerImg>
      <img className='img' src={foto}/>
      </ContainerImg>
      <Contenido>
        <p>Nuestro principal objetivo es que estés contento con tu experiencia de compra y nos vuelvas a elegir. Por eso nos esforzamos mucho para brindarte un destacado servicio de Atención al Cliente.</p>
        <p className='colorBlack'>¡Gracias por elegirnos!</p>
      </Contenido>
      
    </Section>
  )
}

export default Envios