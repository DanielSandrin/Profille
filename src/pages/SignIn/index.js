import {React, useContext} from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import LogoForm from '../../components/Logo';
import LogoProfilles from '../../assets/Logo.svg'
import { useAuth } from '../../hooks/useAuth';

import { Container, Aside, SingUpForm, Content, Acoes } from './styles';

const SchemaSignUp = Yup.object().shape({
  nome: Yup.string().required('Informe o nome'),
  senha: Yup.string().required('Informe a senha')
})

const ValoresIniciais = {
  nome: '',
  senha: ''
}

export default function SignIn() {
  const Navigate = useNavigate();
  const { EfetuaLogin } = useAuth();

  function handleSubmit(values, actions) {
    const { nome, senha } = values

    const login = EfetuaLogin(nome, senha);

    if (login) {

      return Navigate('/dashboard');
    }
    alert('Usuário não encontrado');
    actions.resetForm({ values: '' });
  }

  return (
    <Container>
      <Aside>
        <img src={LogoProfilles} alt="Profilles ajudando quem mais precisa" />
      </Aside>
      <SingUpForm>
        <LogoForm />
        <Formik onSubmit={handleSubmit} initialValues={ValoresIniciais} validationSchema={SchemaSignUp}
          render={(handleSubmit) => (
            <Form>
              <Content>
                <Field type="text" name='nome' values='' placeholder='Nome do usuário'></Field>
                <ErrorMessage component='span' name='nome' />
                <Field type="password" name="senha" values='' placeholder="Senha"></Field>
                <ErrorMessage component='span' name='senha' />
              </Content>
              <Acoes>
                <button type="submit">Logar</button>
              </Acoes>
              <Link to='/signup'>Criar nova conta</Link>
            </Form>
          )}>
        </Formik>
      </SingUpForm>
    </Container>
  );
}
