import visa from '../../images/visa.png';
import mastercard from '../../images/mastercard.png';
import americanExpress from '../../images/amex_logo.png';
import paypal from '../../images/paypal.png';
import bitcoin from '../../images/bitcoin.png';
import OKpay from '../../images/OKpay.png';
import amazon from '../../images/amazon.png';
import style from './PromotionalOffers.module.scss';

export default function PromotionCardsItem() {
  return (
    <>
      <li className={style.PaymentItem}>
        <a href="#visa">
          <img src={visa} alt="visa" width={100} height={36} />
        </a>
      </li>
      <li className={style.PaymentItem}>
        <a href="#mastercard">
          <img src={mastercard} alt="mastercard" width={66} height={51} />
        </a>
      </li>
      <li className={style.PaymentItem}>
        <a href="#american-express">
          <img
            src={americanExpress}
            alt="american express"
            width={54}
            height={54}
          />
        </a>
      </li>
      <li className={style.PaymentItem}>
        <a href="#paypal">
          <img src={paypal} alt="paypal" width={100} height={24} />
        </a>
      </li>
      <li className={style.PaymentItem}>
        <a href="#bitcoin">
          <img src={bitcoin} alt="bitcoin" width={79} height={24} />
        </a>
      </li>
      <li className={style.PaymentItem}>
        <a href="#OKpay">
          <img src={OKpay} alt="OKpay" width={74} height={18} />
        </a>
      </li>
      <li className={style.PaymentItem}>
        <a href="#amazon">
          <img src={amazon} alt="amazon" width={120} height={23} />
        </a>
      </li>
    </>
  );
}
