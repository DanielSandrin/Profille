import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
`;

export const SingUpForm = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 50vw;

  button{
    background: green;
    flex: 1;  
  }

  form{
    width: 70%;
    max-width: 800px;
  }

  input{
    margin-top: 15px;
  }

  a{
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 5px;
    color: #fff;
    text-decoration: underline;
  }

  @media(max-width: 778px){
    width: 100%;
    margin: 32px 0px;

    form{
      width: 50%;
    }
  }

  @media(max-width: 380px){
    width: 100%;

    form{
      width: 100%;
    }
  }
`;

export const Acoes = styled.div`
  display:flex;
  flex-direction: row;
`;

export const Content = styled.div`
  display:flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  height: 100vh;
  background: #202126;

  img{
    max-width: 100%;
  }

  @media(max-width: 908px){
    width: 80vh;
  }

  @media(max-width: 778px){
    display:none;
  }
`;