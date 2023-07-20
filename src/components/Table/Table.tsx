import { useState } from 'react';

import './Table.scss';
import TableHeading from '../TableHeading/TableHeading';

function Table() {
  return (
    <table className="table">
      <tr className="table__row">
        <TableHeading title="ID" />
        <TableHeading title="Заголовок" />
        <TableHeading title="Описание" />
      </tr>
      <tr className='table__row'>
        <td>1</td>
        <td>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</td>
        <td>
          quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas
          totam\nnostrum rerum est autem sunt rem eveniet architecto
        </td>
      </tr>
    </table>
  );
}

export default Table;
