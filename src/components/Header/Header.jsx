import React, { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Menu from '../Menu/Menu';
import { IoMdMenu } from 'react-icons/io';
import style from './Header.module.scss';

export default function Header({ children, onClick, ...props }) {
  const [open, setOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <nav className={style.WrapperNav}>
        <button
          type="button"
          onClick={handleToggle}
          className={style.BurgerBtnIcon}
        >
          <IoMdMenu onClick={() => setOpen(!open)} />
        </button>
        {open && (
          <Modal onClose={setOpen}>
            <Menu />
          </Modal>
        )}
        <a href="#company-name" className={style.TitleHeader}>
          Company Name
        </a>
        <div className={style.HeaderMenu}>
          <Menu className={style.HeaderMenu} />
        </div>
        <div>
          <Button type="button" className={style.BntHeaderLogin}>
            Log in
          </Button>
          <Button type="button" className={style.BntHeader}>
            Get started
          </Button>
        </div>
      </nav>
    </>
  );
}
