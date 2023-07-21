import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TableHeading from '../../components/TableHeading/TableHeading';
import Search from '../../components/Search/Search';
import Navigation from '../../components/Navigation/Navigation';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hook';
import { fetchPosts } from '../../slices/postsSlice/postsSlice';
import { IPost } from '../../slices/postsSlice/postsSlice.types';
import './TablePage.scss';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

function TablePage() {
  const { page } = useParams();
  const { postsLoadingStatus, posts, searchInput } = useAppSelector((state) => state.posts);
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  if (page === undefined || Number.isNaN(+page) || +page > 5 || +page < 1) {
    navigate('/1');
  }

  const filter = (value: string, isActive: boolean) => {
    if (value === 'ID' && isActive) {
      const newFilterPosts = filteredPosts.map((item) => item).sort((a, b) => b.id - a.id);
      setFilteredPosts(newFilterPosts);
    }

    if (value === 'ID' && !isActive) {
      const newFilterPosts = filteredPosts.map((item) => item).sort((a, b) => a.id - b.id);
      setFilteredPosts(newFilterPosts);
    }

    if (value === 'Заголовок' && isActive) {
      const newFilterPosts = filteredPosts.map((item) => item).sort((a, b) => (b.title > a.title ? 1 : -1));
      setFilteredPosts(newFilterPosts);
    }

    if (value === 'Заголовок' && !isActive) {
      const newFilterPosts = filteredPosts.map((item) => item).sort((a, b) => (a.title > b.title ? 1 : -1));
      setFilteredPosts(newFilterPosts);
    }

    if (value === 'Описание' && isActive) {
      const newFilterPosts = filteredPosts.map((item) => item).sort((a, b) => (b.body > a.body ? 1 : -1));
      setFilteredPosts(newFilterPosts);
    }

    if (value === 'Описание' && !isActive) {
      const newFilterPosts = filteredPosts.map((item) => item).sort((a, b) => (a.body > b.body ? 1 : -1));
      setFilteredPosts(newFilterPosts);
    }
  };

  if (postsLoadingStatus === 'loading') {
    return (
      <div className="container">
        <Loader />
      </div>
    );
  }

  if (postsLoadingStatus === 'error') {
    return (
      <div className="container">
        <ErrorMessage />
      </div>
    );
  }

  return (
    <div className="container">
      <Search />
      <table className="table">
        <thead>
          <tr className="table__row">
            <TableHeading title="ID" onFilter={filter} />
            <TableHeading title="Заголовок" onFilter={filter} />
            <TableHeading title="Описание" onFilter={filter} />
          </tr>
        </thead>

        <tbody>
          {page &&
            filteredPosts
              .filter((post) => post.title.includes(searchInput) || post.body.includes(searchInput))
              .slice((+page - 1) * 10, +page * 10)
              .map((item) => (
                <tr className="table__row" key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              ))}
        </tbody>
      </table>
      <Navigation />
    </div>
  );
}

export default TablePage;
