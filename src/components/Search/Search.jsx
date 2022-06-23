import React from 'react';
import { IoSearch } from 'react-icons/io5';
import style from './Search.module.scss';

export default function Search() {
  return (
    <div className={style.WrapperContainer}>
      <input
        type="text"
        className={style.InputSearch}
        placeholder="Search blog"
      />
      <IoSearch width={18} height={18} className={style.IconSearch} />
    </div>
  );
}
