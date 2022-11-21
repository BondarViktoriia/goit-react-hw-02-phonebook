import { ListItem, Contact, ButtonDelete } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Contact>
            {name}: {number}{' '}
          </Contact>{' '}
          <ButtonDelete onClick={()=> onDeleteContact(id)}>Delete</ButtonDelete>{' '}
        </ListItem>
      ))}
    </ul>
  );
};

export default ContactList;
