import React from 'react'
import styled from 'styled-components'
import Subtotal from './Subtotal/Subtotal'

const ContainerProduct = ({product}) => { 
    
    const ContainerProduct = styled.div`
    width: 100%;
    border: solid 3px #E9E4E8;
    display: flex;
    height: 150px;
  `
  const Product = styled.div`
    flex: 3;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `
  const Img = styled.img`
    width: 100px;
    height: 100px; 
  `
  const ProductMontos =styled.div`
  flex: 1;
  display: flex;
  justify-content: center; 
  align-items: center;
  border-left: solid 2px #E9E4E8;
  border-right: solid 2px #E9E4E8;
  `
  return (
        <ContainerProduct>
          <Product>
          <Img src={product.img} alt={product.name}></Img>
          {product.name}
          </Product>
          <ProductMontos>{"$" + product.precio}</ProductMontos>
          <ProductMontos>{product.cantidad}</ProductMontos>
          <ProductMontos>${Subtotal(product.precio, product.cantidad )}</ProductMontos>
        </ContainerProduct>
  )
}

export default ContainerProduct