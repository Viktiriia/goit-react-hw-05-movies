// import { Div, Input, Button } from './SearchBox.styled';
// const SearchBox = ({ value, onChange }) => {
//   return (
//     <Div>
//       <Input
//         type="text"
//         value={value}
//         onChange={e => onChange(e.target.value)}
//       />
//       <Button type="submit">Search</Button>
//     </Div>
//   );
// };

// export default SearchBox;

import { useState } from 'react';
import { Form, Input, Button } from './SearchBox.styled';

export default function SearchForm({ formSubmit, errorMessage }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      errorMessage();
      return;
    }
    formSubmit(query);
    setQuery('');
  };

  const handleInput = e => {
    setQuery(e.target.value.toLowerCase().trim());
  };

  return (
    
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={query}
          onChange={handleInput}
        />
        <Button type="submit">Search</Button>
      </Form>
  
  );
}