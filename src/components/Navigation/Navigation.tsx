import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './Navigation.scss';

function Navigation() {
  const { page } = useParams();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(page && +page);

  return (
    <div className="navigation">
      <button
        type="button"
        onClick={() => {
          setActivePage((pastValue) => pastValue && pastValue - 1);
          navigate(`../${activePage && activePage - 1}`);
        }}
        className="navigation__button"
        disabled={activePage === 1}
      >
        Назад
      </button>
      <ul className="navigation__list">
        {Array(5)
          .fill(0)
          .map((item, index) => (
            <Link
              onClick={() => setActivePage(item + 1 + index)}
              className={`navigation__link ${index + 1 === activePage ? 'navigation__link_active' : ''}`}
              key={uuidv4()}
              to={`../${item + 1 + index}`}
            >
              {item + 1 + index}
            </Link>
          ))}
      </ul>
      <button
        onClick={() => {
          setActivePage((pastValue) => pastValue && pastValue + 1);
          navigate(`../${activePage && activePage + 1}`);
        }}
        type="button"
        className="navigation__button"
        disabled={activePage === 5}
      >
        Далее
      </button>
    </div>
  );
}

export default Navigation;
