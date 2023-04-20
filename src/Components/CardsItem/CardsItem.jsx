import css from "./CardsItem.module.css"

const CardsItem = ({ id, photo, name, position, email, phone }) => {

  return (
    <li key={id} className={css.cardsItem}>
      <img src={photo} alt={name} className={css.avatar} />
      <p>{name}</p>
      <address className={css.address}>
        <p>{position}</p>
        <a href={`mailto:${email}`}>{email}</a>
        <a href={`tel:${phone}`}>{phone}</a>
      </address>
    </li>
  );
};
 
export default CardsItem;