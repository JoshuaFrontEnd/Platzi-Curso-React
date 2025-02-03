import { useState } from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const [searchValue, setSearchValue] = useState('');

  console.log('Los usuarios buscan ToDos de:', searchValue);

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={event => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
