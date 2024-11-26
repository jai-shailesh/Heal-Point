/* eslint-disable no-unused-vars */
import React from 'react'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* ------Left Section------ */}
            <div>
                <h1 className='mb-5 w-48 text-xl'>HealPoint</h1>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Simplifying healthcare, connecting patients and doctors with ease</p>

            </div>
             {/* ------Center Section------ */}
             <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <p>Home</p>
                    <p>About us</p>
                    <p>Contact us</p>
                    <p>Privacy Policy</p>
                </ul>          
             </div>
          {/* ------Right Section------ */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 XXXXX-XXXXX</li>
                    <li>healpoint@gmail.com</li>
                </ul>
            </div>

        </div>
        {/* -------CopyRight Text ------------ */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Heal Point - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer