import Icons from '../../../images/sprite.svg';
import style from '../Footer.module.scss';

export default function FooterItemSocial() {
  return (
    <>
      <li className={style.SocialItem}>
        <a href="https://www.facebook.com/">
          <svg width="14" height="28" className={style.SocialItem__icon}>
            <use href={`${Icons}#icon-facebook`} />
          </svg>
        </a>
      </li>
      <li className={style.SocialItem}>
        <a href="https://twitter.com/">
          <svg width="28" height="23" className={style.SocialItem__icon}>
            <use href={`${Icons}#icon-twitter`} />
          </svg>
        </a>
      </li>
      <li className={style.SocialItem}>
        <a href="https://www.google.com/">
          <svg width="34" height="22" className={style.SocialItem__icon}>
            <use href={`${Icons}#icon-google`} />
          </svg>
        </a>
      </li>

      <li className={style.SocialItem}>
        <a href="https://www.linkedin.com/">
          <svg width="28" height="28" className={style.SocialItem__icon}>
            <use href={`${Icons}#icon-linkedin`} />
          </svg>
        </a>
      </li>
      <li className={style.SocialItem}>
        <a href="#SL">
          <svg width="30" height="30" className={style.SocialItem__icon}>
            <use href={`${Icons}#icon-SL`} />
          </svg>
        </a>
      </li>
      <li className={style.SocialItem}>
        <a href="https://www.youtube.com/">
          <svg width="41" height="29" className={style.SocialItem__icon}>
            <use href={`${Icons}#icon-youtube`} />
          </svg>
        </a>
      </li>
    </>
  );
}
