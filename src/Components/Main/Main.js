import React from "react";
import Form from "../Form/Form";
import SocialIcons from "../SocialIconsComponents/SocialIcons";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

import s from "./Main.module.css";
export const Main = (props) => {
  return (
    <div className={s.main}>
      <div>
        {props.validationSuccess ? (
          <SuccessMessage />
        ) : (
          <Form
            validationSuccess={props.validationSuccess}
            setValidationSuccess={props.setValidationSuccess}
          />
        )}
      </div>

      <div className={s.horizontalLine}></div>
      <div>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Main;
