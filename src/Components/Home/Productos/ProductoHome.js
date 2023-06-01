import React from 'react'
import styled from 'styled-components'
import ButtonContext from '../../Context/ButtonContext'


const ProductoHome = ({product}) => {
    const { img, name, precio, categoria  } = product

    const handleClick = () => {
      alert("Ahhh huevoo")
    }
  
    const Container = styled.div`
    width: 360px;
    padding: 20px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 5px #E5E2E5;
    cursor: pointer;
    .div-img {
      height: 290px;
      padding: 20px;
    }
    .img {
      width: 100%;
      height: 100%;
    }
    .precio {
      color: #425c81;
    }
    .name {
      color: #999;
      font-family: 'Edu NSW ACT Foundation', cursive;
    }
  `
  
  return (
    <Container onClick={handleClick}>
        <div className='div-img'>
          <img className='img' src={img} alt="Almohada blanca"/>
        </div>  
        <h2 className='precio'>${precio}</h2>
        <h2 className='nombre'>{name}</h2>
        <ButtonContext product={product}/>
    </Container>
  )
  
}

export default ProductoHome