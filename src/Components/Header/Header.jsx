import SignUp from "../../Utilities/Buttons/SignUp/SignUp";
import UserBtn from "../../Utilities/Buttons/User/User";
import logo from "../../Utilities/images/logo.png";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <img src={logo} alt="logo" className={css.logo} />
      <h1 className={css.logoText}>testtask</h1>
      <UserBtn />
      <SignUp />
    </header>
  );
};

export default Header;
