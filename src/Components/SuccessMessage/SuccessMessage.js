import React from "react";
import s from "./successMessage.module.css";
import success from "../../img/success.svg";
export const SuccessMessage = () => {
  return (
    <div className={s.message}>
      <div className={s.img}>
        <img src={success} alt="golden cup" />
      </div>
      <div>
        <h1 className={s.heading}>Thanks for subscribing!</h1>
        <p className={s.subheading}>
          You have successfully subscribed to our email listing. Check your
          email for the discount code.
        </p>
      </div>
    </div>
  );
};

export default SuccessMessage;
