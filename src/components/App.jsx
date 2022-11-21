import Section from './Section';
import ContactForm from "./ContactForm";
import React, { Component } from 'react';
import ContactList from './ContactList';


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
 
  formSubmitHadler = data => {
  console.log(data);
  }
  
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts:prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <Section text={'Phonebook'} />
        <ContactForm onSubmit={this.formSubmitHadler } />


        <Section text={'Contacts'} />
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
