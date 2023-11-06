import React from 'react';
import { Formik } from 'formik';
import {
  Form,
  Field,
  ErrorMessage,
  FormGroup,
  SubmitButton,
} from './ContactForm.styled';
import * as Yup from 'yup';

// Валідація за допомогою Yup
const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
});

export const ContactForm = ({ onSubmit }) => (
  <Formik
    initialValues={{
      name: '',
      number: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={(values, actions) => {
      onSubmit(values);
      actions.resetForm();
    }}
  >
    <Form>
      <FormGroup>
        Name
        <Field type="text" name="name"></Field>
        <ErrorMessage name="name" component={'span'} />
      </FormGroup>
      <FormGroup>
        Number
        <Field type="number" name="number"></Field>
        <ErrorMessage name="number" component={'span'} />
      </FormGroup>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  </Formik>
);
