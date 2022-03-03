import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Container, Content, FormHeader } from './styles';

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



function NewJob() {
  const Navigate = useNavigate();
  
  function handleSubmit(values, actions) {
    const cadastros = JSON.parse(localStorage.getItem('Profille')) ?? []
    cadastros.push(values)
    localStorage.setItem('Profille', JSON.stringify(cadastros));
    Navigate('/');
  }
  return (
    <Container>
      <Formik onSubmit={handleSubmit} initialValues={ValoresIniciais} validationSchema={SchemaSignUp}
        render={(handleSubmit) => (
          <Form>
            <Content>
              <FormHeader>
                <Field type="text" name='nome' values='' placeholder='Título'></Field>
                <ErrorMessage component='span' name='nome' />
                <Field type="password" name="senha" values='' placeholder="R$ 100,00"></Field>
                <ErrorMessage component='span' name='senha' />
              </FormHeader>
              <Field as='textarea' lines={4} name="email" values='' placeholder="Descrição"></Field>
              <ErrorMessage component='span' name='email' />
            </Content>
            <div>
              <button type="submit">Salvar</button>
            </div>
          </Form>
        )}>
      </Formik>
    </Container>
  );
}

export default NewJob;