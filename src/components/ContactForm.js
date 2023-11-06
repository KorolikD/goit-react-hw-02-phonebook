import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
  .required('Required'),
  number:
    Yup.string()
    .required('Required'),
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
      <label>
        Name
        <Field type="text" name="name" required></Field>
        <ErrorMessage name="name" component={'span'} />
      </label>
      <label>
        Number
        <Field type="number" name="number" required></Field>
        <ErrorMessage name="number" component={'span'} />
      </label>

      <button type="submit" style={{ backgroundColor: 'white' }}>
        Add contact
      </button>
    </Form>
  </Formik>
);

// import { Component } from 'react';

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   onChangeContact = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     console.log('Form', this.state);
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={e => this.props.handleSubmit(e, name, number)}>
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             value={name}
//             required
//             onChange={this.onChangeContact}
//           />
//         </label>
//         <label>
//           Number
//           <input
//             type="tel"
//             name="number"
//             value={number}
//             required
//             onChange={this.onChangeContact}
//           />
//         </label>
//         <button type="submit" style={{ backgroundColor: 'white' }}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
