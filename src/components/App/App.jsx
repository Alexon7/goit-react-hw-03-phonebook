import { Component } from 'react';

import { GlobalStyleComponent } from '../../styles/GlobalStyles';

import { nanoid } from 'nanoid';

import { ContactForm } from '../ContactForm/ContactForm';

import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { MainTitle, Title, Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onFormSubmit = data => {
    const contact = {
      ...data,
      id: nanoid(),
    };
    const isAtList = this.state.contacts.find(
      contact => contact.name === data.name
    );
    if (isAtList) {
      alert('Already in list');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onInputChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.filteredContacts();
    return (
      <Container>
        <MainTitle>Phonebook 📱</MainTitle>
        <ContactForm onFormSubmit={this.onFormSubmit} btnText="Create" />
        <Title>Contacts 📑</Title>
        <Filter onInputChange={this.onInputChange} />
        <ContactList
          data={filteredContacts}
          deleteContact={this.deleteContact}
        />
        <GlobalStyleComponent />
      </Container>
    );
  }
}
