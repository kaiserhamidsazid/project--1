import React from 'react';
import './footer.css'
const Footer = () => {
    return (
        <div className='footer'>
          <p className='text-center'> Allrights resvered &copy;</p>
            <div className='text-center'>
            <a href="/"><i class="fa-brands fa-facebook fs-3 "></i></a>
            <a href="/"><i class="fa-brands fa-twitter fs-3 ms-4"></i></a>
            <a href="/"> <i class="fa-brands fa-instagram fs-3 ms-4"></i></a>
            <a href="/"> <i class="fa-brands fa-linkedin fs-3 ms-4"></i></a>
            </div>
        </div>
    );
};

export default Footer;