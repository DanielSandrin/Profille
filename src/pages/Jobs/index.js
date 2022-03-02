import React from 'react';
import {Link} from 'react-router-dom';

import { Container, Table } from './styles';

export default function Jobs() {
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
          <tr>
            <td>Desenvolvimento de APP</td>
            <td><Link to="/">APP</Link></td>
            <td>R$ 1000,00</td>
          </tr>
          <tr>
            <td>Desenvolvimento de APP</td>
            <td>teste de desenvolvimento de app bla bl</td>
            <td>R$ 1000,00</td>
          </tr>
        </tbody>
      </Table>
    </Container>);
}