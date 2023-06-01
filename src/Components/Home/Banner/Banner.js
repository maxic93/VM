import React from 'react'
import styled from 'styled-components'
import imgBanner from "./Fotos Banner/banner.jpeg"
import logo from "./Fotos Banner/logo.png"

const Banner = () => {
  return (
    <BannerContainer>
      <Div><img src={logo}/>
        <span className='span'></span>
        <h2>TODO LO QUE QUERES</h2>
        <Span>y necesitas</Span>
      </Div>
    </BannerContainer>
  )
  
}
const BannerContainer = styled.div`
  background-image: url(${imgBanner});
  padding: 200px 100px;
  text-align: center;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center  ;
  width: 100%;
  height: 580px;
  @media (max-width: 600px) {
    justify-content: center;
  }
  &:before {
    content:'';
	  position: absolute;
    top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  background-color: rgba(0,0,0,0.5);
  }
`; 

const Div = styled.h1`
  top: 40px;
  color: #fff;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: 'Cinzel', serif;
  @media (max-width: 600px) {
    font-size: 2.9em;
  }
  img {
    width: 300px;
    height: 300px;
    margin-left: 20px;
  }
  .span {
    border: 2px solid #fff;
    width: 250px;
    heigth: 5px;
    position: absolute;
    margin-top: 170px;
    margin-left: 45px;
  }
  h2 {
    margin-top: -80px;
    margin-left: 20px;;
    font-size: .7em;
    font-family: 'Antonio', sans-serif;
  }
`
const Span = styled.span`
  color: #F35ACD;
  font-size: .8em;
  font-family: 'Edu NSW ACT Foundation', cursive;
  position: absolute;
  top: 233px;
  left: 180px;
`
const P = styled.p`
  
`
export default Banner