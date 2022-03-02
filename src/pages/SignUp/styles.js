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
  width: 50vw;

  button{
    background: green;
  }

  input{
    margin-top: 15px;
  }

  form{
    width: 70%;
    max-width: 800px;
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
  background: #202126;

  img{
    margin: 32px 32px;
    max-width: 650px;
  }
`;