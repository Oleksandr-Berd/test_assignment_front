import { useState } from "react";
import useFetch from "../../Utilities/Hooks/useFetch";
import { baseUrl } from "../../Utilities/Url/Url";
import CardsItem from "../CardsItem/CardsItem";
import css from "./CardsList.module.css"

const CardsList = () => {
  const [page, setPage] = useState(1);
  const [perPage] = useState(6);

  const { users, isLoading, error } = useFetch(baseUrl, { page, perPage });

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
        </ul>
      </>
    );
};

export default CardsList;
