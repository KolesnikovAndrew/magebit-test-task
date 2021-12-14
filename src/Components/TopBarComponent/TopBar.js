import React from "react";
import s from "./TopBar.module.css";
import logo from "../../img/logo.png";
import logoText from "../../img/logoText.png";
export const TopBar = () => {
  return (
    <div className={s.topBar}>
      <div className={s.logoPineapple}>
        <img src={logo} className={s.logo} alt="logo" />
        <img src={logoText} className={s.logoText} alt="logo text" />
      </div>
      <div className={s.links}>
        <a className={s.a} href="#">
          About
        </a>
        <a className={s.a} href="#">
          How it works
        </a>
        <a className={s.a} id={s.contactLink} href="#">
          Contact
        </a>
      </div>
    </div>
  );
};

export default TopBar;
