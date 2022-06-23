import MenuTagsItem from './MenuTagsItem';
import style from './MenuTags.module.scss';

export default function MenuTags() {
  return (
    <div className={style.ContainerWrap}>
      <div className={style.TagsWrap}>
        <p className={style.TagsCategory}>TAGS:</p>
        <ul className={style.TagsList}>
          <MenuTagsItem />
        </ul>
      </div>
      <div className={style.TagsCategoryWrap}>
        <a href="#team" className={style.TagsCategory}>
          team
        </a>
        <a href="#contact" className={style.TagsCategory}>
          contact
        </a>
      </div>
    </div>
  );
}
