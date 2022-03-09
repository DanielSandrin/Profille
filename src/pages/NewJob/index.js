import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Container, Content, FormHeader } from './styles';

const SchemaSignUp = Yup.object().shape({
  titulo: Yup.string().required('Informe o título da vaga'),
  valor: Yup.string().required('Informe a remuneração'),
  descricao: Yup.string().min(16, 'A descrição deve conter no mínimo 16 caracteres')
    .required('Informe a descricao')
})


const ValoresIniciais = {
  titulo: '',
  valor: '',
  descricao: ''
}
function NewJob() {

  function handleSubmit(values, actions) {
    const trabalhos = JSON.parse(localStorage.getItem('MeusTrabalhos')) ?? []
    trabalhos.push(values)
    localStorage.setItem('MeusTrabalhos', JSON.stringify(trabalhos));
    actions.resetForm({ values: '' });
  }

  return (
    <Container>
      <Formik onSubmit={handleSubmit} initialValues={ValoresIniciais} validationSchema={SchemaSignUp}
        render={(handleSubmit) => (
          <Form>
            <Content>
              <FormHeader>
                <Field type="text" name='titulo' values='' placeholder='Título'></Field>
                <ErrorMessage component='span' name='titulo' />
                <Field type="text" name="valor" values='' placeholder="R$ 100,00"></Field>
                <ErrorMessage component='span' name='valor' />
              </FormHeader>
              <Field as='textarea' lines={4} name="descricao" values='' placeholder="Descrição"></Field>
              <ErrorMessage component='span' name='descricao' />
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