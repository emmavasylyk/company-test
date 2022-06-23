import Icons from '../../images/sprite.svg';
import style from './MainListArticles.module.scss';

export default function SiteCardsItem({
  urlWebp,
  urlImg,
  title,
  author,
  data,
  tags,
}) {
  return (
    <>
      <picture className={style.ItemImage}>
        <source srcSet={urlWebp} type="images/webp" />
        <source srcSet={urlImg} />
        <img src={urlImg} alt={author} className={style.ItemImage} />
      </picture>
      <div className={style.ArticleWrapper}>
        <h2 className={style.Title}>{title}</h2>
        <p className={style.ItemAuthor}>
          <span className={style.Author}>{author}</span>{' '}
          <span className={style.Data}>{data}</span>
        </p>
        <p className={style.Tags}>{tags}</p>
        <p className={style.NumberViews}>
          <svg width="16" height="16" className={style.IconComment}>
            <use href={`${Icons}#icon-comment`} />
          </svg>
          0
        </p>
        <p>
          {' '}
          <span className={style.ItemLine}></span>
        </p>
      </div>
    </>
  );
}
