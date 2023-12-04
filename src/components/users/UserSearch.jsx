import React, { useContext } from 'react'
import { useState } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'


function UserSearch() {
  const [text,setText]=useState('')

 const {users ,searchUsers,clearUsers}=useContext(GithubContext)

const {setAlert}= useContext(AlertContext)

  const handlechange = (e) => setText(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

  if(text === ''){
    setAlert('Please enter something','error')
  } else {
    searchUsers(text) 

    setText('')
  }}


  return (
    <div className='grid grid-cols-1  xl:gid-cols-2 
    lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
  
      <div>
          <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <div className='relative'>
                 <input
                 type='text'
                 className='w-full pr-40 bg-slate-300 shadow-lg input
                 input-lg text-black'
                 placeholder='Search'
                 onChange={handlechange}
                 />

                 <button  type='Submit' className='absolute  hover:bg-teal-900 bg-teal-800  shadow-lg top-0 right-0 rounded-l-none w-36 btn btn-lg'>
                    Go
                 </button>
                </div>
            </div>
          </form>
      </div>
       
       {users && users.length >0 &&(
        <div>
                 <button onClick={clearUsers} className='btn btn-ghost btn-lg'>
                 Clear
                 </button>
        </div> 
       )}
    </div>
  )
}

export default UserSearch
