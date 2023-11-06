import { FilterInput, Label } from './Filter.styled';

export const Filter = ({ filter, onChange }) => (
  <Label>
    Find contact by name
    <FilterInput
      type="text"
      name="filter"
      value={filter}
      onChange={evt => onChange(evt.target.value)}
    />
  </Label>
);
