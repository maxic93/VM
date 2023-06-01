import  {useContext} from 'react'
import styled from 'styled-components'
import ContainerProduct from './ContainerProduct'
import { MyContext } from '../../Context/DataContext';
import "./carrito.css"

const CarritoContainer = () => {

  const { arrayProducts } = useContext(MyContext);
  
    const ContainerCarrito = styled.div`
    width: 100%;
  `
    const Carrito = styled.ul`
    width: 100%;
    padding: 20px;
    display: flex;
    color: #222;
    list-style: none;
    background: #D1C9CF;
    font-weight: 600;
  `
  const CarritoProduct = styled.li`
    flex: 3;
    display: flex;
    align-items: center;
  `
  const CarritoTittle = styled.div`
    flex: 1;
    display: flex; 
    align-items: center;
  `
            
  return (
    <ContainerCarrito className='carritoContainer'>
        <Carrito>
          <CarritoProduct>Producto</CarritoProduct>
          <CarritoTittle>Precio</CarritoTittle>
          <CarritoTittle>Cantidad</CarritoTittle>
          <CarritoTittle>Subtotal</CarritoTittle>
        </Carrito>
        {arrayProducts.map((product, i) =>{
            return <ContainerProduct key={i} product={product}/>
        })}
      </ContainerCarrito>
  )
}

export default CarritoContainer