import styled from "styled-components";
import { Form, Input } from 'antd';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191816;
  height: 100vh;
`
export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24221F;
  height: 510px;
  width: 572px;
  color: #AFB6C2;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormStyled = styled(Form)`
  label{
      color: #AFB6C2;
    }
    .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{
      color: #AFB6C2;
    }
  .ant-form-item{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  Input{
    width: 100%;
  }
`

export const InputStyled = styled(Input)`
  width: 100%;
`