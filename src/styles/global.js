import { createGlobalStyle } from 'styled-components';

// import 'react-perfect-scrollbar/dist/css/styles.css';
// import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html,body,#root{
    height: 100%;
  }
  
  body{
    background: #171923;
    -webkit-font-smoothing: antialiase;
  }

  body, input, button{
    font: 14px 'Roboto', sans-serif;
    color: white;
  }

  input{
    height: 50px;
    width: 100%;
    border-radius: 8px;
    padding: 0 16;
    background: #FFF;
    border: 1px solid #a8a8b3;
    color: #2c2c2c;
  }

  label{
    line-height: 28px;
  }

  a{
    text-decoration:none;
  }

  ul{
    list-style: none;
  }

  button{
    cursor: pointer;
    height: 50px;
    width: 150px;
    border-radius: 8px;
    font-weight: 500;
    color: #FFF;
    border: 0;
  }
`;