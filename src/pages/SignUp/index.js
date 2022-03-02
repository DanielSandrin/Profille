import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field,ErrorMessage,FormikHelpers } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import LogoForm from '../../components/Logo';

import LogoProfilles from '../../assets/Logo.svg'

import { Container, Aside, SingUpForm, Content, Acoes } from './styles';

const SchemaSignUp = Yup.object().shape({
  nome: Yup.string().required('Informe o nome'),
  email: Yup.string().email('e-mail inválido').required('informe o e-mail'),
  senha: Yup.string().min(8, 'A senha deve conter no minímo 8 caracteres')
    .required('Informe a senha')
})

const ValoresIniciais = {
  nome: '',
  email: '',
  senha: ''
}

export default function SignUp() {
  const Navigate = useNavigate();

  function handleSubmit(values,actions){
    const cadastros = JSON.parse(localStorage.getItem('Profille')) ?? []
    cadastros.push(values)
    localStorage.setItem('Profille',JSON.stringify(cadastros));
    Navigate('/');
  }
  return (
    <Container>
      <Aside>
        <img src={LogoProfilles} width='140%' alt="Profilles ajudando quem mais precisa" />
      </Aside>
      <SingUpForm>
        <LogoForm/>
        <Formik onSubmit={handleSubmit} initialValues={ValoresIniciais} validationSchema={SchemaSignUp}
          render={(handleSubmit) => (
            <Form>
              <Content>
                <Field type="text" name='nome' values='' placeholder='Nome do usuário'></Field>
                <ErrorMessage component='span' name='nome'/>
                <Field type="text" name="email" values='' placeholder="E-mail"></Field>
                <ErrorMessage component='span' name='email'/>
                <Field type="password" name="senha" values='' placeholder="Senha"></Field>
                <ErrorMessage component='span' name='senha'/>
              </Content>
              <Acoes>
                <button type="submit">Salvar</button>
                <Link to='/'><BiArrowBack/>Voltar</Link>
              </Acoes>
            </Form>
          )}>
        </Formik>
      </SingUpForm>
    </Container>
  );
}