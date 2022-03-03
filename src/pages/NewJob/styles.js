import styled from 'styled-components';

export const Container = styled.div`
  flex:1;

  padding: 1%;
  background: #1A202C;
  border-radius: 5px;
  box-shadow: 0 0 1em black;
  width: 79vw;

  form textarea{
    height: 150px;
  }

  form button{
    background-color: green;
    width: 100%;
  }

  form{
    width: 77vw;
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

  @media screen and (max-width: 694px){
    display:block;

    input{
      margin-bottom: 2%;
    }
  }
`;