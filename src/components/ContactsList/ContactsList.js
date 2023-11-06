import {
  FilterButton,
  ListContacts,
  ListItem,
  Text,
} from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => (
  <ListContacts>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <Text>
          <span style={{ fontWeight: 500 }}>{name}</span>: {number}
        </Text>
        <FilterButton type="button" onClick={() => onDelete(id)}>
          Delete
        </FilterButton>
      </ListItem>
    ))}
  </ListContacts>
);
