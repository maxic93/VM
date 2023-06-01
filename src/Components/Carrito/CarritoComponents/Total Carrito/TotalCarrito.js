import React, { useContext } from 'react'
import { MyContext } from '../../../Context/DataContext'
import styled from 'styled-components'

const TotalCarrito = () => {
    const { calcularTotal } = useContext(MyContext)

    const Container = styled.div`
      width: 100%;
      display: flex;
      margin-top: 5px;
      align-items: end;
      flex-direction: column;
    `
    const Total = styled.div`
    width: 300px;
    background: #f5f5f5;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 1.2em;
    p {
      font-weight: 600;
    }
    `
    const Button = styled.button`
      padding: 6px;
      width: 120px;
      border-radius: 5px;
      background: #12B096;
      color: #f5f5f5;
      border-style: none;
      margin-top: 4px; 
      `
  return (
      <Container>
        <Total>
          <p>Total</p>
          <span>${calcularTotal()}</span>
        </Total>
        <Button>
          Comprar
        </Button>
      </Container> 
  )
}

export default TotalCarrito