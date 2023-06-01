import React, { useContext, useState } from 'react'
import "./productHome.css"
import styled from 'styled-components'
import ProductoHome from './ProductoHome'
import { ProductContext } from '../../Context/ProductosContext/ProductosContext'

const ProductosHome = () => {
  const {products} = useContext(ProductContext)
  const [arrayFilter, setArrayFilter] = useState(products)

  const handleClick = (e) => {
    const categoria = e.target.textContent
    const categoriaArray = products.filter(product => product.categoria === categoria)
    if (categoria === "Todos") {
      return setArrayFilter(products)
    }
    setArrayFilter(categoriaArray)
  }

  const Container = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: 759px) {
      display: block;  
    }
  `
  const ContainerFilter = styled.div`
    width: 20%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 0px 5px #E5E2E5;
    background: #f5f5f5;
    @media (max-width: 759px) {
      width: 100%; 
    }
  `
  const ContainerProducts = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   padding: 20px;
  
  `
  return (
    <Container>
    <ContainerFilter>
      <button className='button' onClick={handleClick}>Almohadas</button>
      <button className='button' onClick={handleClick}>Cuadros</button>
      <button className='button' onClick={handleClick}>Todos</button>
    </ContainerFilter>
    <ContainerProducts>
    {arrayFilter.map(product => {
        return <ProductoHome 
        key={product.id}
        product={product}/>   
    })}
    </ContainerProducts>
    </Container>
  )
  
}

export default ProductosHome