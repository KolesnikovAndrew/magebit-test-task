import React, { useState } from "react";
import s from "./Form.module.css";
import { useForm } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

let schema = yup.object().shape({
  email: yup
    .string()
    .email("Please provide a valid e-mail adress")
    .required("Email address is required")
    .test(
      "ends-with-co",
      "We are not accepting subscriptions from Colombia emails",
      (email) => email.slice(-3) !== ".co"
    ),
  tos: yup
    .boolean()
    .oneOf([true])
    .default(false)
    .required("You must accept the terms and conditions"),
});

export const Form = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    validateCriteriaMode: "lastErrorDetected",
    mode: "onChange",
  });

  const onSubmit = (data) => {
    props.setValidationSuccess(true);
    console.log(data.email);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={s.headinContainer}>
        <h1 className={s.heading}>Subscribe to newsletter</h1>
        <h2 className={s.subheading}>
          Subscribe to our newsletter and get 10% discount on pineapple glasses.
        </h2>
      </div>
      <div className={s.input}>
        <input
          className={s.inputTextarea}
          type="email"
          name="email"
          placeholder="Type your email address here..."
          {...register("email")}
        />
        <button type="submit" className={s.arrowButton} disabled={!isValid}>
          <BsArrowRight />
        </button>
      </div>
      <p className={s.emailError}>{errors.email && errors.email.message}</p>
      <div className="tos">
        <div className={s.tosContainer}>
          <input
            id="tosCheckbox"
            className={s.tosCheckbox}
            type="checkbox"
            name={"tos"}
            {...register("tos")}
          />
          <label htmlFor="tosCheckbox" className={s.checkmark}></label>
          <label className={s.tosCheckboxLabel} htmlFor="tosCheckbox">
            I agree to
            <a href="#" className={s.tosLink}>
              terms of service
            </a>
          </label>
        </div>
        <p className={s.tosError}>
          {errors.tos && "You must accept the terms and conditions"}
        </p>
      </div>
    </form>
  );
};

export default Form;
