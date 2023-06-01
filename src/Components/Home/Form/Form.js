import React from 'react';
import styled from 'styled-components';

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

  const handleSubmit = (e) => {
    alert("su consulta ah sido enviada")
    console.log(e.target)
    e.preventDefault();
    
  };

  return (
    <Section>
    <FormContainer onSubmit={handleSubmit}>
        <ContainerData>
        <FormGroup>
        <Input placeholder="Nombre" type="text" id="name" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Correo" type="email" id="email" />
      </FormGroup>
        </ContainerData>
      <FormGroup>
        <TextArea placeholder="Su consulta" id="message" />
      </FormGroup>
      <Button type="submit">Enviar</Button>
    </FormContainer>
    </Section>
  );
};

export default Form;