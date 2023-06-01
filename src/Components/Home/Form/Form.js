import styled from 'styled-components';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    
 const Section = styled.section`
    width: 100%;
    padding: 60px 60px 60px 60px;
    background: #f5f5f5;
 `
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: vertical;
  min-height: 250px;
  width: 700px;
  @media (max-width: 830px) {
    width: 250px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 250px;
`;
const ContainerData = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap; 
    @media (max-width: 630px) {
        width: 100%;
      }
`

  const form = useRef();

  const sendEmail = (e) => {
    emailjs.sendForm('service_ssrjdd9', 'template_kzcfzsa', form.current, 'd5OI5cQoE-5ByMdL3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  

  return (
    <Section>
    <FormContainer ref={form} onSubmit={sendEmail}>
        <ContainerData>
        <FormGroup>
        <Input placeholder="Nombre" type="text" id="name" name="user_name"/>
      </FormGroup>
      <FormGroup>
        <Input placeholder="Correo" type="email" id="email" name="user_email"/>
      </FormGroup>
        </ContainerData>
      <FormGroup>
        <TextArea placeholder="Su consulta" id="message" name="message"/>
      </FormGroup>
      <Button type="submit">Enviar</Button>
    </FormContainer>
    </Section>
  );
};

export default Form;