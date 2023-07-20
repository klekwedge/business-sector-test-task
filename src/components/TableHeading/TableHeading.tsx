import { useState } from 'react';

import './TableHeading.scss';

interface TableHeadingProps {
  title: string;
}

function TableHeading({ title }: TableHeadingProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <th className="heading" onClick={() => setIsActive((value) => !value)}>
      {title}
      <img className={`${isActive ? '_active' : ''}`} src="/svg/row.svg" alt="Row icon" />
    </th>
  );
}

export default TableHeading;
