import { Div, Input, Button } from './SearchBox.styled';
const SearchBox = ({ value, onChange }) => {
  return (
    <Div>
      <Input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </Div>
  );
};

export default SearchBox;
