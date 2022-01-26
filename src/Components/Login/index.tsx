import React from "react";
import { Background, Container, FormStyled, InputStyled, LoginBox } from "./style";
import { Form, Input, Button, Checkbox } from 'antd';

export const Login = () => {
  return (
    <Background>
      <LoginBox>
        <Container>
          <div>
            Faça seu login
          </div>
          <div>
            Entre com suas informações de cadastro
          </div>
          <FormStyled>
            <Form.Item
              label="E-mail"
              rules={
                [{
                  required: true,
                  message: 'Campo obrigatório'
                }]
              }
            >
              <InputStyled/>
            </Form.Item>
            <Form.Item
              label="Senha"
              rules={
                [{
                  required: true,
                  message: 'Campo obrigatório'
                }]
              }
            >
              <Input/>
            </Form.Item>
          </FormStyled>
        </Container>
      </LoginBox>
    </Background>
  )
}