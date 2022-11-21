import Section from './Section';
import ContactForm from "./ContactForm";
import React, { Component } from 'react';


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

  render() {
    return (
      <div>
        <Section text={'Phonebook'} />
        <ContactForm onSubmit={this.formSubmitHadler } />


        <Section text={'Contacts'} />
      </div>
    );
  }
}

export default App;
