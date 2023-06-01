import React from 'react'
import styled from 'styled-components'
import CarritoContainer from './CarritoComponents/CarritoContainer'
import TotalCarrito from './CarritoComponents/Total Carrito/TotalCarrito'

const Carrito = () => {

  const Section = styled.section`
  width: 100%;
  padding: 30px;
  min-height: 100vh;
  `
  const Tittle = styled.h2`
  font-size: 3.4em;
  text-align: center;
  color: #777;
  padding: 20px 0px 20px 0px;
  `
  return (
    <Section>
      <Tittle>Carrito de Compras</Tittle>
      <CarritoContainer/>
      <TotalCarrito/>
    </Section>
  )
}

export default Carrito