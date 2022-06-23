import { nanoid } from 'nanoid';
import { ProgramsMarkup } from './ProgramsMarkup';
import style from '../Footer.module.scss';

export default function FooterListPrograms({ name }) {
  return (
    <div className={style.CompanyProgramWrap}>
      <h3 className={style.TitleFooter}>Programs</h3>
      <ul>
        {ProgramsMarkup.map(card => (
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
