import style from './News.module.scss';

export default function AnnouncementsItem() {
  return (
    <>
      <li className={style.Item}>
        Upcoming Changes (Live Chat, Less Censorship, More Access)
      </li>
      <li className={style.Item}>New Servers (US Washington DC)</li>
      <li className={style.Item}>New Servers (US Denver)</li>
      <li className={style.Item}>Open Source: Releasing the PIA iOS Client</li>
      <li className={style.Item}>Opera Extension is now available</li>
    </>
  );
}
