import React from 'react'

function Footer() {

const footYear = new Date().getFullYear()


  return (
          
    <footer className='footer p-10 bg-neutral text-primary-center  footer-center'>
        <div>


            <p> Copyrights &copy; {footYear} All rights reserved  </p>
        </div>

    </footer>
  )
}

export default Footer;
