import { React, createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext();
export function AuthContextProvider(props) {
  const [user, setUser] = useState();
  const Navigate = useNavigate();

  useEffect(() => {
    const infoUser = JSON.parse(localStorage.getItem('userLogin')) ?? []

    if (infoUser) {
      Navigate('/');
    }
    setUser({
      nome: infoUser.nome
    })

    Navigate('/dashboard');
  }, []);

function EfetuaLogin(nome, senha) {
    const cadastros = JSON.parse(localStorage.getItem('Profille')) ?? []
    const login = cadastros.find(login => login.nome === nome && login.senha === senha);

    if (login === undefined) {
      return;
    }

    localStorage.setItem('userLogin', JSON.stringify({ nome: nome }));

    setUser({
      nome: nome
    });

    return login;
  }

  return (
    <AuthContext.Provider value={{ user, EfetuaLogin }}>
      {props.children}
    </AuthContext.Provider>
  )
}