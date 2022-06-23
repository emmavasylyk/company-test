import FooterListCompany from './Company/FooterListCompany';
import FooterListLegal from './Legal/FooterListLegal';
import FooterListPrograms from './Programs/FooterListPrograms';
import FooterListLearnMore from './LearnMore/FooterListLearnMore';
import FooterListSocial from './Social/FooterListSocial';
import FooterAbout from './About/FooterAbout';
import style from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={style.WrapperContainer}>
      <h3 className={style.Title}>Company Name</h3>
      <nav className={style.FooterNav}>
        <div className={style.SectionFooter}>
          <FooterListCompany />
          <div className={style.SectionFooterWrap}>
            <FooterListPrograms />
            <FooterListLearnMore />
          </div>
        </div>
        <div className={style.FooterNav}>
          <FooterListLegal />
          <div>
            <FooterAbout />
            <div className={style.FooterTextWrap}>
              <p className={style.FooterText}>Map data provided by Google.</p>
              <p className={style.FooterText}>
                PC Mag Editor's Choice award image reprinted with permission.
                &copy; 2012 Ziff Davis, Inc. All Rights Reserved. PC Mag quote
                reprinted from www.pcmag.com with permission. &copy; 2012 Ziff
                Davis, Inc. All Rights Reserved.
              </p>
              <p className={style.FooterText}>
                &copy; London Trust Media, Inc. All Rights Reserved.
              </p>
            </div>
            <FooterListSocial />
          </div>
        </div>
      </nav>
    </div>
  );
}
