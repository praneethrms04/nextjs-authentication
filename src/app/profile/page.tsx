'use client'
import { useGetUserByIdQuery } from '@/redux/services/authSlice'
import { useRouter } from 'next/navigation'
import React from 'react'

const UserProfile = () => {

  const router = useRouter()
  const id = localStorage.getItem('id')
  const { isLoading, isSuccess, data, isError } = useGetUserByIdQuery(id)


  if (isSuccess) {
    const { username, email, _id } = data.user
  }

  // console.log(token)
  const logoutHandler = () => {
    localStorage.clear()
    router.push('/login')
  }
  return (
    <div>
      <p>
        UserProfile
      </p>
      {
        isLoading && <p>Loading....</p>
      }
      {
        isSuccess && data && (<div>
          <p> {data.user.username}</p>
          <p> {data.user.email}</p>
        </div>)
      }

      <button type='button' onClick={logoutHandler}> Logout</button>

    </div>
  )
}

export default UserProfile