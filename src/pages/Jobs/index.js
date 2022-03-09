import {React, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import { Container, Table } from './styles';

export default function Jobs() {
  const [trabalhos, setTrabalhos] = useState([])

  useEffect(() => {
    const MeusTrabalhos = JSON.parse(localStorage.getItem('MeusTrabalhos'));
    setTrabalhos(MeusTrabalhos);
  },[])

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Vaga</th>
            <th>Descrição</th>
            <th>Remuneração</th>
          </tr>
        </thead>
        <tbody>
          {trabalhos.map(trabalhos =>{
            return(
              <tr>
                <td>{trabalhos.titulo}</td>
                <td><Link to="/">{trabalhos.descricao}</Link></td>
                <td>{trabalhos.valor}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>);
}