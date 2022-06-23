import { nanoid } from 'nanoid';
import { CompanyMarkup } from './CompanyMarkup';
import style from '../Footer.module.scss';

export default function FooterListCompany({ menuTitle }) {
  return (
    <div className={style.CompanyWrap}>
      <h3 className={style.TitleFooter}>Company</h3>
      <ul>
        {CompanyMarkup.map(card => (
          <li key={nanoid()} className={style.Item}>
            <a href="#" className={style.ItemLink}>
              {card.menuTitle}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
