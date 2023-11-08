import { nanoid } from 'nanoid';
import { Component } from 'react';
import { GlobalStyles } from 'styles';

import { Title, TitleH2 } from './App.styled';
import { ContactForm, Filter, ContactsList } from 'components';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const isContactInList = contacts.some(
      ({ name: contactName }) =>
        contactName.toLowerCase().trim() === name.toLowerCase().trim()
    );

    isContactInList
      ? alert(`${name} is olready in contacts`)
      : this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            { id: nanoid(), name: name.trim(), number },
          ],
        }));
  };

  onChangeFilter = value => {
    this.setState({ filter: value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contactId),
    }));
  };

  visibleContactsFilter = arr => {
    return arr.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = this.visibleContactsFilter(contacts);

    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />

        <TitleH2>Contacts</TitleH2>
        <Filter filter={filter} onChange={this.onChangeFilter} />

        {visibleContacts.length > 0 && (
          <ContactsList
            contacts={visibleContacts}
            onDelete={this.deleteContact}
          />
        )}

        <GlobalStyles />
      </>
    );
  }
}
