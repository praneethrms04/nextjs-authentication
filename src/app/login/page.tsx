"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from 'react-toastify'
import { useUserLoginMutation } from "@/redux/services/authSlice";
import ErrorMessage from "../components/ErrorMessage";

const Login = () => {

  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { error, isLoading, isSuccess, isError, data }] = useUserLoginMutation()

  const onLoginhandler = async (e: any) => {
    e.preventDefault();
    const userData = JSON.stringify(user)
    await loginUser(userData)
  };

  if (isSuccess && data) {
    const token = data.user.token
    localStorage.setItem('token', token)
    localStorage.setItem('id', data.user._id)
    router.push('/profile')
    toast.success("you have successfully Login..!", {
      position: toast.POSITION.TOP_CENTER
    })
  }


  return (
    <>
      {
        isLoading && <p>Loading....</p>
      }

      {
        error && 'status' in error && (
          <ErrorMessage errMsg={'error' in error ? error.error : JSON.stringify(error.data)} />
        )
      }
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Get started today!
            </h1>

            {/* <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
              eaque error neque ipsa culpa autem, at itaque nostrum!
            </p> */}
          </div>

          <form
            onSubmit={onLoginhandler}
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          >
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border border-cyan-600"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  className="w-full rounded-lg  p-4 pe-12 text-sm shadow-sm border  border-cyan-600"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                You Don't have an account ?<Link href={"/signup"}>Signup </Link>
              </p>
              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            height=""
            width=""
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          />
        </div>
      </section>
    </>
  );
};

export default Login;
