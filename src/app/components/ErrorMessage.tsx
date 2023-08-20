'use client'
import React from 'react'

const ErrorMessage = (props: any) => {
    const { errMsg } = props
    const { status, data } = errMsg
    console.log(status)
    return (
        <>
            <div className="absolute top-0 left-0">
                <div className="max-w-xs bg-white border rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700" role="alert">
                    <div className="p-2 sm:p-4">
                        <h3 className="text-xs text-gray-800 font-semibold sm:text-base dark:text-white">
                            {errMsg}
                        </h3>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ErrorMessage