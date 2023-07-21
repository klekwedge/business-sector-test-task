import { useState } from 'react';
import './Search.scss';
import { useAppDispatch } from '../../hooks/redux-hook';
import { changeSearchInput } from '../../slices/postsSlice/postsSlice';

function Search() {
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();

  return (
    <div className="search">
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          dispatch(changeSearchInput(e.target.value));
        }}
        className="search__input"
        type="text"
        placeholder="Поиск"
      />
      <img className="search__button" src="/svg/search.svg" alt="Search icon" />
    </div>
  );
}

export default Search;
