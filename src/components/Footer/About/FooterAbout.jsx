import style from '../Footer.module.scss';

export default function FooterAbout() {
  return (
    <div className={style.AboutFooterWrap}>
      <h3 className={style.TitleFooter}>About</h3>
      <p className={style.AboutText}>
        Private Internet Access is the leading VPN Service provider specializing
        in secure, encrypted VPN tunnels which create several layers of privacy
        and security providing you safety on the internet. Our service is backed
        by multiple gateways worldwide with access in 28+ countries, 44+
        regions.
      </p>
    </div>
  );
}
