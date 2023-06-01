import React from 'react'
import Banner from './Banner/Banner'
import Info from './Info/Info'
import Nosotros from './Nosotros/Nosotros'
import styled from 'styled-components'
import Form from './Form/Form'



const Home = () => {
   
  const Section = styled.div`
    min-vh: 100%;
  `
  return (
    <Section>
      <Banner/>
      <Info/>
      <Nosotros/>
      <Form/>
      </Section>  
  )
}

export default Home