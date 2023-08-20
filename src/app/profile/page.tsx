'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const UserProfile = () => {

  const router = useRouter()

  // const token = localStorage.getItem('token')
  // console.log(token)
  const logoutHandler = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }
  return (
    <div>
      <p>
        UserProfile
      </p>
      <button type='button' onClick={logoutHandler}> Logout</button>

    </div>
  )
}

export default UserProfile