import style from './News.module.scss';

export default function PopularPostsItem() {
  return (
    <>
      <li className={style.Item}>The Gift of Privacy</li>
      <li className={style.Item}>
        UK High Court Censors Many Links To Popcorn Time: Useless, Dangerous
        Gesture
      </li>
      <li className={style.Item}>
        About the PIA Client Security and VPN Security in General
      </li>
      <li className={style.Item}>
        A Private Net Is Just As Fundamental A Right As Freedom Of Speech
      </li>
      <li className={style.Item}>
        Wiretapping Today Just Doesn't Mean What The Word Meant In The 1990s, So
        Don't Fall For That Lie
      </li>
    </>
  );
}
