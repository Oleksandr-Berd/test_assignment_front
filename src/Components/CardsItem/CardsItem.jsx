const CardsItem = ({ id, photo, name, position, email, phone }) => {
  return (
    <li key={id}>
      <img src={photo} alt="" />
      <p>{name}</p>
      <p>{position}</p>
      <a href={`mailto:${email}`}>{email}</a>
      <a href={`tel:${phone}`}>{phone}</a>
    </li>
  );
};
 
export default CardsItem;