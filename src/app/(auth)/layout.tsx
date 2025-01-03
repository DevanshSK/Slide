import React from 'react'

type Props = {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
    return (
        <div className='h-screen flex justify-center items-center bg-[#000046] bg-[-webkit-linear-gradient(to_top,_#1CB5E0,_#000046)] dark:bg-[-webkit-linear-gradient(to_top,_#000000,_#000046)] bg-[linear-gradient(to_top,_#1CB5E0,_#000046)] dark:bg-[linear-gradient(to_top,_#000000,_#000046)]'>
            {children}
        </div>
    )
}

export default AuthLayout