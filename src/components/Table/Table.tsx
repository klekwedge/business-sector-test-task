import { useState } from 'react';

import './Table.scss';
import TableHeading from '../TableHeading/TableHeading';

function Table() {
  return (
    <table className="table">
      <tr className='table__row'>
        <TableHeading title='ID'/>
        <TableHeading title='Заголовок'/>
        <TableHeading title='Описание'/>
      </tr>
    </table>
  );
}

export default Table;
