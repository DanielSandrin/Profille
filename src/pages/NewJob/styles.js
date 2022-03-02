import styled from 'styled-components';

export const Container = styled.div`
  padding: 1%;
  background: #1A202C;
  border-radius: 5px;
  box-shadow: 0 0 1em black;

  form button{
    background-color: green;
    height: 40px;
  }
`;

export const Content = styled.div`
  display:flex;
  flex-direction: column;
  margin: 32px 0;

  textarea{
    margin-top: 1%;
  }
`;

export const FormHeader = styled.div`
  display:flex;
  justify-content: space-between;
  gap: 1%;
`;