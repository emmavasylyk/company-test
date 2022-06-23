import PromotionCardsList from './PromotionCardsList';
import style from './PromotionalOffers.module.scss';

export default function PromotionalOffers() {
  return (
    <div className={style.ContainerWrap}>
      <p className={style.Title}>Sign up today – 7 day money back guarantee</p>
      <PromotionCardsList />
    </div>
  );
}
