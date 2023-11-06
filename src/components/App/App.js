import { nanoid } from 'nanoid';
import { Component } from 'react';
import { GlobalStyles } from 'styles';

import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Title, TitleH2 } from './App.styled';

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

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

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
