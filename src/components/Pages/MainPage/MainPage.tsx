import { Link } from 'react-router-dom';
import './MainPage.scss';

function MainPage() {
  return (
    <div className="main-page">
      <img className="main-page__logo" alt="Logo" src="/public/img/logo.png" />
      <Link className='main-page__link' to="/1">Перейти на страницу просмотра таблицы</Link>
    </div>
  );
}

export default MainPage;
