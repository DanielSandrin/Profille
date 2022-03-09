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

  width: 40vw;
  height: 70vh;
  margin-right: 5%;
  background: #1A202C;
  border-radius: 5px;
  box-shadow: 0 0 1em black;

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

  @media(max-width: 916px){
    width: 60%;
    margin: 32px auto;

    form{
      width: 80%;
    }
  }

  @media(max-width: 547px){
    width: 80%;
    margin:32px auto;

    form{
      width: 90%;
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

  img{
    margin-top: 10%;
    max-width: 80%;
  }

  @media(max-width: 916px){
    display: none;
  }

`;