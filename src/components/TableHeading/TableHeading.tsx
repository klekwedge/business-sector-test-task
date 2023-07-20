import { useState } from 'react';

import './TableHeading.scss';

interface TableHeadingProps {
  title: string;
  onFilter: (value: string, isActive: boolean) => void;
}

function TableHeading({ title, onFilter }: TableHeadingProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <th
      className="heading"
      onClick={() => {
        setIsActive((value) => !value);
        onFilter(title, !isActive);
      }}
    >
      {title}
      <img className={`${isActive ? '_active' : ''}`} src="/svg/row.svg" alt="Row icon" />
    </th>
  );
}

export default TableHeading;
