import { nanoid } from 'nanoid';
import { Component } from 'react';
import { GlobalStyles } from 'styles';

import { Filter } from 'components/Filter';
import { ContactsList } from 'components/ContactsList';
import { ContactForm } from 'components/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = evt => {
    evt.preventDefault();
    const { contacts, name, number } = this.state;
    const isContactInList = contacts.some(
      ({ name: contactName }) =>
        contactName.toLowerCase().trim() === name.toLowerCase().trim()
    );

    isContactInList
      ? alert(`${name} is olready in contacts`)
      : this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            { id: nanoid(), name: name.trim(), number: number.trim() },
          ],
        }));

    this.reset();
  };

  onChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    console.log(this.state);
    const { contacts, name, number, filter } = this.state;

    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onChange={this.onChange}
          handleSubmit={this.addContact}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.onChange} />

        {visibleContacts.length > 0 && (
          <ContactsList contacts={visibleContacts} />
        )}

        <GlobalStyles />
      </>
    );
  }
}
