import React from 'react';
import ArrowDown from '../../images/copy.png';
import style from './Menu.module.scss';

export default function Menu() {
  return (
    <ul className={style.Topmenu}>
      <li className={style.TopmenuItem}>
        <a href="#whyus" className={style.TopmenuItem__link}>
          why us
          <img
            src={ArrowDown}
            alt="arrow down list"
            className={style.TopmenuItem__img}
          />
        </a>

        <ul className={style.Submenu}>
          <li className={style.SubmenuItem}>
            <a href="#item2.1" className={style.SubmenuItem__link}>
              Item 2 level
            </a>
          </li>
          <li className={style.SubmenuItem}>
            <a href="#item2.2" className={style.SubmenuItem__link}>
              Item 2 level
            </a>
          </li>
          <li className={style.SubmenuItem}>
            <a href="#item2.3" className={style.SubmenuItem__link}>
              Item 2 level
            </a>
          </li>
        </ul>
      </li>
      <li className={style.TopmenuItem}>vpn apps</li>
      <li className={style.TopmenuItem}>
        <a href="#support" className={style.TopmenuItem__link}>
          support
          <img
            src={ArrowDown}
            alt="arrow down list"
            className={style.TopmenuItem__img}
          />
        </a>
        <ul className={style.Submenu}>
          <li className={style.SubmenuItem}>
            <a href="#item3.1" className={style.SubmenuItem__link}>
              Item 3 level
            </a>
          </li>
          <li className={style.SubmenuItem}>
            <a href="#item3.2" className={style.SubmenuItem__link}>
              Item 3 level
            </a>
          </li>
          <li className={style.SubmenuItem}>
            <a href="#item3.3" className={style.SubmenuItem__link}>
              Item 3 level
            </a>
          </li>
        </ul>
      </li>
      <li className={style.TopmenuItem}>
        <a href="#resources" className={style.TopmenuItem__link}>
          resources
          <img
            src={ArrowDown}
            alt="arrow down list"
            className={style.TopmenuItem__img}
          />
        </a>
        <ul className={style.Submenu}>
          <li className={style.SubmenuItem}>
            <a href="#item4.1" className={style.SubmenuItem__link}>
              Item 4 level
            </a>
          </li>
          <li className={style.SubmenuItem}>
            <a href="#item4.2" className={style.SubmenuItem__link}>
              Item 4 level
            </a>
          </li>
          <li className={style.SubmenuItem}>
            <a href="#item4.3" className={style.SubmenuItem__link}>
              Item 4 level
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
