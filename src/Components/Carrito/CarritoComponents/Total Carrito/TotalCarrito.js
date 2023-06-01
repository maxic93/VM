import React, { useContext } from 'react'
import { MyContext } from '../../../Context/DataContext'
import styled from 'styled-components'

const TotalCarrito = () => {
    const { calcularTotal } = useContext(MyContext)

    const Container = styled.div`
      width: 100%;
      display: flex;
      justify-content: flex-end;
    `
  return (
      <Container>
        Total ${calcularTotal()}
      </Container> 
  )
}

export default TotalCarrito