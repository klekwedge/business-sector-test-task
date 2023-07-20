import { useState } from 'react';
import './Search.scss';

function Search() {
  const [message, setMessage] = useState('');

  const buttonHandler = () => {};

  return (
    <div className="search">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="search__input"
        type="text"
        placeholder="Поиск"
      />
      <button className="search__button" type="button" onClick={buttonHandler}>
        <img src="/svg/search.svg" alt="Search icon" />
      </button>
    </div>
  );
}

export default Search;
