import ContactForm from './ContactForm';
import React, { Component } from 'react';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter';
import Notiflix from 'notiflix';
import { PhoneBook, PhonebookContainer, ContactsTitle } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notiflix.Notify.warning(`${name} is already in contacts.`, {
        width: '500px',
        height: '40px',
        backOverlay: true,
        clickToClose: true,
        closeButton: true,
      });
    } else if (contacts.find(contact => contact.number === number)) {
      Notiflix.Notify.warning(`${number} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <PhonebookContainer>
        <PhoneBook>Phonebook</PhoneBook>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.changeFilter} />

        <ContactsTitle>Contacts</ContactsTitle>
        {contacts.length > 0 ? (
          <ContactList
            contacts={filterContacts}
            onDeleteContact={this.deleteContact}
          />
        ) : (
          Notiflix.Notify.info('Your phonebook is empty. Please add contact.', {
            position: 'center-bottom',
            backOverlay: true,
            clickToClose: true,
            closeButton: true,
            info: {
              background: '#8f9a9b',
              textColor: '#0c0b0b',
              childClassName: 'notiflix-notify-info',
              notiflixIconColor: '#f7f4f4',
              fontAwesomeClassName: 'fas fa-info-circle',
              backOverlayColor: 'rgba(38,192,211,0.2)',
            },
          })
        )}
      </PhonebookContainer>
    );
  }
}

export default App;
