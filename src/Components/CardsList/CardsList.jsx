import { useState } from "react";
import useFetch from "../../Utilities/Hooks/useFetch";
import { baseUrl } from "../../Utilities/Url/Url";
import CardsItem from "../CardsItem/CardsItem";
import css from "./CardsList.module.css"
import ShowMore from "../../Utilities/Buttons/ShowMore/ShowMore";

const CardsList = () => {
  const [page, setPage] = useState(1);
  const [perPage] = useState(5);

    const { users, isLoading, error } = useFetch(baseUrl, { page, perPage });
    
    const showMore = () => {
      setPage((prevPage) => prevPage + 1);
    };

    const shouldLoadingButton =
      users.length > 0 && users.length >= 5;

    return (
      <>
        <ul className={css.cardList}>
          <h1 className={css.cardListTitle}>Working with GET request</h1>
          {users.map(({ id, photo, name, position, email, phone }) => (
            <CardsItem
              id={id}
              key={id}
              photo={photo}
              name={name}
              position={position}
              email={email}
              phone={phone}
            />
          ))}
          {shouldLoadingButton && <ShowMore showMore={showMore} />}
        </ul>
      </>
    );
};

export default CardsList;
