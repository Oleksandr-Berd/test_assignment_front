import css from "./Hero.module.css"
import SignUp from "../../Utilities/Buttons/SignUp/SignUp";

const Hero = () => {
    return (
      <section className={css.hero} >
        <h2 className={css.heroTitle}>Test assignment for front-end developer</h2>
        <p className={css.heroText}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
            </p>
            <SignUp/>
      </section>
    );
}
 
export default Hero;

// style={{ backgroundImage: `url(${backImage})` }}