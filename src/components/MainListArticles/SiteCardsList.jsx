import { nanoid } from 'nanoid';
import { siteCardsMarkup } from './siteCardsMarkup';
import SiteCardsItem from './SiteCardsItem';
import style from './MainListArticles.module.scss';

export default function SiteCardsList() {
  return (
    <ul className={style.list}>
      {siteCardsMarkup.map(card => (
        <li key={nanoid()} className={style.item}>
          <SiteCardsItem
            urlWebp={card.urlWebp}
            urlImg={card.urlImg}
            title={card.title}
            author={card.author}
            data={card.data}
            tags={card.tags}
          />
        </li>
      ))}
    </ul>
  );
}
