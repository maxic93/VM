import React from 'react'
import styled from 'styled-components'

const Info = () => {
  const Container = styled.div`
    width: 100%;
    background: #F0F0F0;
    padding: 30px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .container {
        margin-bottom: 10px;
        width: 360px;
        display: flex; 
        height: 400px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        h4 {
            color: #3C3B3B;
        }
        h5 {
            font-size: 17px;
            color: #969595;
        }
        .icon {
            font-size: 40px;
            padding: 70px;
            border-radius: 50%;
            background: #fff;
            margin-bottom: 20px;
            color: #425c81;
        }
    }
  `
  return (
    <Container>
        <div className='container'>
            <i class="fa-regular fa-credit-card icon"></i>
            <h4>Medios de pagos</h4>
            <h5>Mercado pago/ Transferencia/ Efectivo</h5>
        </div>
        <div className='container'>
            <i class="fa-solid fa-truck-fast icon"></i>
            <h4>Envios sin cargo</h4>
            <h5>Realizamos envios los dias sabados</h5>
        </div>
        <div className='container'>
        <i class="fa-sharp fa-solid fa-store icon"></i>
            <h4>Productos de bazar</h4>
            <h5>Cocina/ Dormitorio/ Baños/ Living</h5>
        </div>
    </Container>
  )
}

export default Info