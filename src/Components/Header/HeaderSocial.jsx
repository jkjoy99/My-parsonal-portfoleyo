import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/jk-joy-510763280/" ><BsLinkedin /></a>
            <a href="https://github.com/jkjoy99" ><BsGithub /></a>
        </div>
    );
};

export default HeaderSocial;