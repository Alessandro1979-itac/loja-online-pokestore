import React from 'react';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

import "./styles.scss"

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/Alessandro1979-itac"><AiOutlineGithub size="40px" color="black"/></a>
      <a href="https://www.linkedin.com/in/alessandro-muniz-caranha/"><AiFillLinkedin size="40px" color="black"/></a>
    </div>
  );
}

export default Footer;
