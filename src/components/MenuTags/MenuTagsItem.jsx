import style from './MenuTags.module.scss';

export default function MenuTagsItem() {
  return (
    <>
      <li className={style.TagsItem}>
        <a href="#bitcoin" className={style.TagsItem__link}>
          bitcoin
        </a>
      </li>
      <li className={style.TagsItem}>
        <a href="#bittorrent" className={style.TagsItem__link}>
          bittorrent
        </a>
      </li>
      <li className={style.TagsItem}>
        <a href="#irc" className={style.TagsItem__link}>
          irc
        </a>
      </li>
      <li className={style.TagsItem}>
        <a href="#news" className={style.TagsItem__link}>
          news
        </a>
      </li>
      <li className={style.TagsItem}>
        <a href="#privacy" className={style.TagsItem__link}>
          privacy
        </a>
      </li>
      <li className={style.TagsItem}>
        <a href="#programming" className={style.TagsItem__link}>
          programming
        </a>
      </li>
      <li className={style.TagsItem}>
        <a href="#security" className={style.TagsItem__link}>
          security
        </a>
      </li>
    </>
  );
}
