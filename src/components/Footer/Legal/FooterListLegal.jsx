import { nanoid } from 'nanoid';
import { LegalMarkup } from './LegalMarkup';
import style from '../Footer.module.scss';

export default function FooterListLegal({ name }) {
  return (
    <div className={style.CompanyWrapLegal}>
      <h3 className={style.TitleFooter}>Legal</h3>
      <ul>
        {LegalMarkup.map(card => (
          <li key={nanoid()} className={style.Item}>
            <a href="#" className={style.ItemLink}>
              {card.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
