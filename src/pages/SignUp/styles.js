import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

export const SingUpForm = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;

  width: 40vw;
  height: 70vh;
  background: #1A202C;
  border-radius: 5px;
  box-shadow: 0 0 1em black;

  button{
    background: green;
  }

  input{
    margin-top: 15px;
  }

  form{
    width: 70%;
  }

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #400548;
    border-radius: 50px;
    color: #fff;
    width: 10rem;
  }
`;

export const Acoes = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  display:flex;
  flex-direction: column;
  margin: 32px 0;
`;

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  height: 100vh;

  img{
    margin-top: 10%;
    max-width: 80%;
  }
`;