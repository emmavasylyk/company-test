import React from 'react';
import AnnouncementsItem from './AnnouncementsItem';
import PopularPostsItem from './PopularPostsItem';
import privatePic from '../../images/bitmap.jpg';
import tagsCloud from '../../images/tags.jpg';
import Icons from '../../images/sprite.svg';
import style from './News.module.scss';

export default function News() {
  return (
    <div className={style.WrapperContainer}>
      <section>
        <h3 className={style.Title}>Announcements</h3>
        <svg width="60" height="60" className={style.IconBluebell}>
          <use href={`${Icons}#icon-announcements`} />
        </svg>
        <ul className={style.List}>
          <AnnouncementsItem />
        </ul>
      </section>
      <section className={style.SectionPopPost}>
        <h3 className={style.Title}>Popular posts</h3>
        <svg width="60" height="60" className={style.IconRss}>
          <use href={`${Icons}#icon-arcticons_rss`} />
        </svg>
        <ul className={style.List}>
          <PopularPostsItem />
        </ul>
      </section>
      <img src={privatePic} alt="private user" className={style.PrivatePic} />
      <section className={style.WrapperContainerTag}>
        <h3 className={style.Tag__title}>Tag cloud</h3>
        <img src={tagsCloud} alt="tags cloud" className={style.Tag__image} />
      </section>
    </div>
  );
}
