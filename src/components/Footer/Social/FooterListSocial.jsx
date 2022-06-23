import FooterItemSocial from './FooterItemSocial';
import style from '../Footer.module.scss';

export default function FooterListSocial() {
  return (
    <div className={style.SocialWrap}>
      <h3 className={style.TitleFooter__social}>Social</h3>
      <ul className={style.SocialList}>
        <FooterItemSocial />
      </ul>
    </div>
  );
}
