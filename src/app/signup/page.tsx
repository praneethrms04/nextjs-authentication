"use client";
import Link from "next/link";
import React, { useState } from "react";

const SignUp = () => {


  const [user, setuser] = useState({
    username: '',
    email: '',
    password: ''
  })

  const onRegisterhandler = (e: any) => {
    e.preventDefault()
    console.log(user)
  }
  return (
    <>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
            {/* <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
              eaque error neque ipsa culpa autem, at itaque nostrum!
            </p> */}
          </div>
          <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={onRegisterhandler}>
            <div>
              <label htmlFor="username" className="sr-only">Email</label>
              <div className="relative">
                <input
                  type="username"
                  value={user.username}
                  onChange={(e) => setuser({ ...user, username: e.target.value })}
                  className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border border-cyan-600"
                  placeholder="Enter username"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>

              <div className="relative">
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setuser({ ...user, email: e.target.value })}
                  className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border border-cyan-600"
                  placeholder="Enter email"
                />

              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <input
                  type="password"
                  value={user.password}
                  onChange={(e) => setuser({ ...user, password: e.target.value })}
                  className="w-full rounded-lg  p-4 pe-12 text-sm shadow-sm border  border-cyan-600"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Do you have an account ?
                <Link href='/login'>
                  Login
                </Link>
              </p>

              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            height=''
            width=''
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default SignUp;