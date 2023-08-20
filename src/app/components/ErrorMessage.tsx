'use client'
import React from 'react'

const ErrorMessage = (props: any) => {
    const { errMsg } = props
    const { status, data } = errMsg
    console.log(status)
    return (
        <>
            <div>
                <div>An error has occurred:</div>
                <div>{errMsg}</div>
            </div>
        </>
    )
}

export default ErrorMessage