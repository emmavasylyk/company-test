import { nanoid } from 'nanoid';
import { LearnMoreMarkup } from './LearnMoreMarkup';
import style from '../Footer.module.scss';

export default function FooterListLearnMore({ name }) {
  return (
    <div className={style.CompanyWrap}>
      <h3 className={style.TitleFooter}>Learn More</h3>
      <ul>
        {LearnMoreMarkup.map(card => (
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
