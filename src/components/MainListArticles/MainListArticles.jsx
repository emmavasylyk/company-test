import React from 'react';
import SiteCardsList from './SiteCardsList';
import style from './MainListArticles.module.scss';

export default function MainListArticles() {
  return (
    <div className={style.WrapperContainer}>
      <h2 className={style.TitleSection}>Recent posts</h2>
      <SiteCardsList />
      <button type="submit" className={style.BtnPost}>
        older posts
      </button>
    </div>
  );
}
