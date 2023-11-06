// export const ContactForm = ({ name, number, onChange, handleSubmit }) => (
//   <form onSubmit={handleSubmit}>
//     <label>
//       Name
//       <input
//         type="text"
//         name="name"
//         value={name}
//         required
//         onChange={onChange}
//       />
//     </label>
//     <label>
//       Number
//       <input
//         type="tel"
//         name="number"
//         value={number}
//         required
//         onChange={onChange}
//       />
//     </label>
//     <button type="submit" style={{ backgroundColor: 'white' }}>
//       Add contact
//     </button>
//   </form>
// );

import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeContact = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log('Form', this.state);
    const { name, number } = this.state;
    return (
      <form onSubmit={e => this.props.handleSubmit(e, name, number)}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={this.onChangeContact}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            required
            onChange={this.onChangeContact}
          />
        </label>
        <button type="submit" style={{ backgroundColor: 'white' }}>
          Add contact
        </button>
      </form>
    );
  }
}
