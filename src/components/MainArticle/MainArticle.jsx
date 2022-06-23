import React from 'react';
import remoteControl from '../../images/remote-control.jpg';
import Icons from '../../images/sprite.svg';
import style from './MainArticle.module.scss';

export default function MainArticle() {
  return (
    <div className={style.WrapperContainer}>
      <section className={style.WrapperSection}>
        <img src={remoteControl} alt="" className={style.MainImage} />
        <div className={style.WrapperContent}>
          <h2 className={style.Title}>
            TV Addons: Legal battle against Canadian media giants demonstrates
            severe consequences facing developers accused of copyright
            infringement
          </h2>
          <p className={style.WrapperInfo}>
            <span className={style.Author}>Danica Sergison</span>
            <span className={style.Data}>JUL 08, 2018</span>
          </p>
          <p className={style.Tags}>Copyright, News, Open Source, Privacy</p>

          <p className={style.NumberViews}>
            <svg width="16" height="16" className={style.IconComment}>
              <use href={`${Icons}#icon-comment`} />
            </svg>
            0
          </p>
        </div>
      </section>
    </div>
  );
}
