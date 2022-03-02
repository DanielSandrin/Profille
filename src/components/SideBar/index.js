import { React, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { MdMenu, MdClose } from 'react-icons/md';

import {
  Container, ContainerMenu, Avatar,
  Cabecalho, Text, Menu, Divisor, OutletContainer, ButtonLateral
} from './styles';

export default function SideBar() {
  const { user } = useAuth()
  const [showSideBar, setShowSideBar] = useState(true)

  function verificaSideBar() {
    console.log(showSideBar);
    setShowSideBar(!showSideBar);
  }

  return (
    <Container>
      <nav>
        <ButtonLateral showMenu={showSideBar}>
          <MdMenu fontSize={30} onClick={verificaSideBar} />
        </ButtonLateral>
      </nav>
      <ContainerMenu sidebar={showSideBar}>
        <ButtonLateral>
          <MdClose fontSize={27} onClick={verificaSideBar} />
        </ButtonLateral>
        <Cabecalho>
          <Avatar src='https://github.com/danielsandrin.png' />
          <Text>{user?.nome}</Text>
          <Divisor />
        </Cabecalho>
        <Menu>
          <Link to="newJob" onClick={verificaSideBar} >Anunciar Vaga</Link>
          <Link to="jobs" onClick={verificaSideBar} >Trabalhos</Link>
          <Link to='#' onClick={verificaSideBar}>Perfil</Link>
          <Link to="#" onClick={verificaSideBar}>Sobre</Link>
          <Link to="/" onClick={verificaSideBar}>Sair</Link>
        </Menu>
      </ContainerMenu>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </Container>
  )
}