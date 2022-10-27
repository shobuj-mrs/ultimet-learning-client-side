import React from 'react';
import {useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const info = useLoaderData();

    console.log(info);
    // console.log(info);
    const { title } = info;
    return (
        <div>
            <h1 className='my-6 flex justify-center items-center'>
                <button className='bg-pink-500 hover:bg-pink-700 text-2xl font-bold text-white px-4 py-2 rounded-xl'>Confrim you checkout : {title}</button>
            </h1>

        </div>
    );
};

export default CheckOut;