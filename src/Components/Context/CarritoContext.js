import React, { useContext } from 'react';
import styled from 'styled-components';
import { MyContext } from './DataContext';

const CarritoContext = () => {
    const { cartCount } = useContext(MyContext);
     
    const Span = styled.span `
        height: 25px;
        width: 25px;
        color: #fff;
    `
    return (
        <>
          <Span>
            { 
              cartCount           
            }
          </Span>
        </>
      );
}

export default CarritoContext
