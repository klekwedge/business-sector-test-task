import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TableHeading from '../TableHeading/TableHeading';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hook';
import { fetchPosts } from '../../slices/postsSlice/postsSlice';
import './Table.scss';

function Table() {
  const { page } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.posts);

  useEffect(() => {
    console.log('!');
    dispatch(fetchPosts());
  }, []);

  if (page === undefined || +page > 5 || +page < 1) {
    navigate('/1');
  }

  return (
    <table className="table">
      <thead>
        <tr className="table__row">
          <TableHeading title="ID" />
          <TableHeading title="Заголовок" />
          <TableHeading title="Описание" />
        </tr>
      </thead>

      <tbody>
        {page &&
          posts.slice((+page - 1) * 10, +page * 10).map((item) => (
            <tr className="table__row" key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
