import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  justify-content: stretch;

  nav{
    display:none;
  }

  @media screen and (max-width:976px){
    nav{
      display:flex;
      margin-right: 32px;
      background:#1A202C;
      height: 100vh;
    }
  }
`;

export const ButtonLateral = styled.div`
  display:none;

  @media screen and (max-width:976px){
    display:flex;
    justify-content: end;
    cursor:pointer;

    svg:hover{
      background: #171923;
    }
  }
`;

export const ContainerMenu = styled.div`
  margin-right: 50px;
  height: 100vh;
  background: #1A202C;

  @media screen and (max-width: 976px){
    position: fixed;
    height: 100%;
    left: ${props => props.sidebar ? '0' : '-100%'};
    transition: 0.5s;
    width: 60%;
  }
`;

export const OutletContainer = styled.main`
  margin-top: 32px; 
`;

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 8vh;
`;

export const Divisor = styled.div`
  display: flex;
  align-items:center;
  justify-items: center;

  background-color: #171923;
  padding-top: 2%;
  width: 100%;
  margin-top: 3%;
  border-radius: 8%;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  max-width: 50%;
  border-radius: 50%;
`;

export const Text = styled.span`
  font-size: 1.4rem;
  margin-top: 8%; 
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;

  a{
    color: white;
    padding: 4%;
    font-size: 0.9  rem;
    
    &:hover{
      background: #171923;
    }

    &{
      content: '';
      border-bottom: 1px solid #171923;
      padding: 9px;
    }
  }
`;
