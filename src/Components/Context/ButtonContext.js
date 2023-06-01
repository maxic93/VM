import React, { useContext } from 'react';
import { MyContext } from './DataContext';
import styled from 'styled-components'
import swal from 'sweetalert';
 


const ButtonContext = ({product}) => {

  const { addproduct, contarCarrito } = useContext(MyContext);

  const Button = styled.button`
  padding: 10px;
  color: #f2f2f2;
  background: #12B096;
  border: none; 
  border-radius: 5px;
  width: 180px;
  transition: .3s;
    :hover{
      background: #425c81; 
    }
  `
  const handleClick = () => {
    addproduct(product);
    contarCarrito()
    swal({
      title: "Se agrego al carrito",
    })
  };

  return (
    <>
      <Button onClick={handleClick}>Comprar</Button>
    </>
  );
};

export default ButtonContext