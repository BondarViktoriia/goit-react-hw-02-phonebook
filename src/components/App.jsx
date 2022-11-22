import Section from './Section';
import ContactForm from "./ContactForm";
import React, { Component } from 'react';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter';
import Notiflix from 'notiflix';


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
 
  addContact = ({name,number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

        const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      Notiflix.Notify.warning(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      Notiflix.Notify.warning(`${number} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
   
  }
  
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts:prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  changeFilter = (e) => {
    this.setState({filter:e.currentTarget.value})
  }

  render() {
    const { filter,contacts } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const filterContacts = this.state.contacts.filter(contact=>contact.name.toLowerCase().includes(normalizedFilter))
    return (
      <div>
        <Section text={'Phonebook'} />
        <ContactForm onSubmit={this.addContact} />
       <Filter value={filter} onChange={this.changeFilter} />

        <Section text={'Contacts'} />
        {contacts.length > 0 ?
          (<ContactList contacts={filterContacts} onDeleteContact={this.deleteContact} />) : (Notiflix.Notify.info("Your phonebook is empty. Please add contact."))
        }

      
      </div>
    );
  }
}

export default App;
