export const Filter = ({ filter, onChange }) => (
  <label>
    Find contact by name
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={evt => onChange(evt.target.value)}
    />
  </label>
);
