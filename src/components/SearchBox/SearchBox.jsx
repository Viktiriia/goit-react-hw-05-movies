import { useState } from 'react';

import { Form, Button } from './SearchBox.styled'
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
      <h2>Movie Search</h2>
      <input
        type="text"
        debounceTimeout={500}
        value={query}
        onChange={handleInput}
        placeholder="enter the name of the movie"
      />
     <Button type="submit">Search</Button>
    </Form>

  );
}