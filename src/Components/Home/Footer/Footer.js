import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    const Container = styled.div`
    width: 100%;
    background: #111;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px;
    `
    const Div = styled.div`
    width: 360px;
    color: #fff;
    padding: 30px;
    h2 {
        font-size: 30px;
    }
    h4 {
        font-size: 15px;
    }
    .icon {
        padding: 5px;
    }.social-red {
        font-size: 27px;
    }
    a {
        font-size: 25px; 
        color: #fff;
    }
    `
  return (
    <Container>
        <Div>
            <h2>VM Deco Bazar</h2>
            <h4>VM Deco Bazar ©2023</h4>
        </Div>
        <Div>
           <h4><i class="fa-sharp fa-solid fa-location-dot icon"></i>Corrientes, Capital</h4>
           <h4><i class="fa-sharp fa-solid fa-phone icon"></i>3794-271615</h4>
           <h4><i class="fa-sharp fa-solid fa-envelope icon"></i>vmdecobazar@gmail.com</h4>
        </Div>
        <Div>
            <h2 className='social-red'>¡¡Seguinos!!</h2>
            <a target="_blank" rel="noreferrer" href='https://www.instagram.com/decovm_/'><i class="fa-brands fa-instagram icon"></i></a>
            <a target="_blank" rel="noreferrer" href='https://www.facebook.com/decovm.ar/'><i class="fa-brands fa-facebook icon"></i></a>
        </Div>
    </Container>
  )
}

export default Footer