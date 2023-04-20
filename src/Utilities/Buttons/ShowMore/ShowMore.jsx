import css from "./ShowMore.module.css";

const ShowMore = ({showMore}) => {
  return (
    <>
      <button className={css.showMore} onClick={showMore}>Show more</button>
    </>
  );
};

export default ShowMore;
