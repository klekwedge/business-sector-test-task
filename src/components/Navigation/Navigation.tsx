import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './Navigation.scss'

function Navigation() {
  return (
    <div className="navigation">
      <button type="button" className="navigation__button">
        Назад
      </button>
      <ul className="navigation__list">
        {Array(5)
          .fill(0)
          .map((item, index) => (
            <Link className='navigation__link' id={uuidv4()} to={`/${item + 1 + index}`}>
              {item + 1 + index}
            </Link>
          ))}
      </ul>
      <button type="button" className="navigation__button">
        Далее
      </button>
    </div>
  );
}

export default Navigation;
