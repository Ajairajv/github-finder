import React from 'react'

function About() {
  return (
    <div className='text-align-center'>
    <h1 className='text-6xl mb-4'>Github Finder</h1>
    <p className='mb-4 text-2xl font-light'>
    Embark on a code expedition with our GitHub Profile Explorer! Seamlessly search and unveil developer profiles, unlocking a world of coding expertise. Elevate your exploration game and delve into the realms of innovation. GitHub has never been this accessible – discover, connect, and celebrate the genius behind the code.
    </p>
    <p className='text-lg text-gray-400'>
      Version <span className='text-white'>1.0.0</span>
    </p>
    <p className='text-lg text-gray-400'>
      Layout By: 
      { " "}
      <a className='text-white' href='/'>
         Ajairaj V
      </a>
    </p>
  </div>
  )
}

export default About
