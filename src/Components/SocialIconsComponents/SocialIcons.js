import React from "react";
import s from "./SocialIcons.module.css";

import cn from "classnames";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
export const SocialIcons = () => {
  return (
    <div>
      <ul className={s.socialIcons}>
        <li className={cn(s.socialIcon, s.facebook)}>
          <FaFacebookF />
        </li>
        <li className={cn(s.socialIcon, s.instagram)}>
          <AiOutlineInstagram />
        </li>
        <li className={cn(s.socialIcon, s.twitter)}>
          <AiOutlineTwitter />
        </li>
        <li className={cn(s.socialIcon, s.youtube)}>
          <AiFillYoutube />
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
