import {
  FilterButton,
  ListContacts,
  ListItem,
  Text,
  BoldText,
} from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => (
  <ListContacts>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <Text>
          <BoldText>{name}</BoldText>: {number}
        </Text>
        <FilterButton type="button" onClick={() => onDelete(id)}>
          Delete
        </FilterButton>
      </ListItem>
    ))}
  </ListContacts>
);
