import Icons from '../../images/sprite.svg';
import Button from '../Button/Button';
import PromotionCardsItem from './PromotionCardsItem';
import style from './PromotionalOffers.module.scss';

export default function PromotionCardsList() {
  return (
    <>
      <ul className={style.List}>
        <li className={style.Item}>
          <h3 className={style.Item__title}>Monthly</h3>
          <p className={style.CurrencyText}>
            <svg width="12" height="32" className={style.CurrencyText__icon}>
              <use href={`${Icons}#icon-dollar`} />
            </svg>
            <span className={style.CurrencyText__money}>6.95</span>
            <span className={style.CurrencyText__month}>/mo.</span>
          </p>
          <p className={style.Description}>Includes all VPN features.</p>
          <Button type="submit" className={style.Item__button}>
            Sing Up
          </Button>
        </li>
        <li className={style.Item}>
          <h3 className={style.Item__title}>Two Years</h3>
          <p className={style.CurrencyText}>
            <svg width="12" height="32" className={style.CurrencyText__icon}>
              <use href={`${Icons}#icon-dollar`} />
            </svg>
            <span className={style.CurrencyText__money}>2.91</span>
            <span className={style.CurrencyText__month}>/mo.</span>
          </p>
          <p className={style.Description}>
            <span className={style.DescriptionLineThrough}>$166.80</span>
            $69.95 per two years{' '}
            <span className={style.Discount}>Save 58%*</span>
          </p>
          <Button type="submit" className={style.Item__button}>
            Sing Up
          </Button>
        </li>
        <li className={style.Item}>
          <h3 className={style.Item__title}>Yearly</h3>
          <p className={style.CurrencyText}>
            <svg width="12" height="32" className={style.CurrencyText__icon}>
              <use href={`${Icons}#icon-dollar`} />
            </svg>
            <span className={style.CurrencyText__money}>3.33</span>
            <span className={style.CurrencyText__month}>/mo.</span>
          </p>
          <p className={style.Description}>
            <span className={style.DescriptionLineThrough}>$83.40</span>
            $39.95 per year{' '}
            <span className={style.DiscountDescription}>Save 52%*</span>
          </p>
          <Button type="submit" className={style.Item__button}>
            Sing Up
          </Button>
        </li>
      </ul>
      <section className={style.PaymentContainer}>
        <div className={style.PaymentWrap}>
          <h3 className={style.PaymentTitle}>Ways to pay:</h3>
          <ul className={style.PaymentList}>
            <PromotionCardsItem />
          </ul>
        </div>
        <div className={style.PaymentWrap}>
          <a href="#" className={style.Payment__link}>
            <span className={style.Payment__text}>How to pay anonymously</span>
            <svg width="24" height="24" className={style.Payment__icon}>
              <use href={`${Icons}#icon-shape`} />
            </svg>
          </a>
          <a href="#" className={style.Payment__link}>
            <span className={style.Payment__text}>REDEEM GIFT CARD</span>
            <svg width="24" height="24" className={style.Payment__icon}>
              <use href={`${Icons}#icon-shape`} />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
