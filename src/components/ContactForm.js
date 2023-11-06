export const ContactForm = ({ name, number, onChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label>
      Name
      <input
        type="text"
        name="name"
        value={name}
        required
        onChange={onChange}
      />
    </label>
    <label>
      Number
      <input
        type="tel"
        name="number"
        value={number}
        required
        onChange={onChange}
      />
    </label>
    <button type="submit" style={{ backgroundColor: 'white' }}>
      Add contact
    </button>
  </form>
);
