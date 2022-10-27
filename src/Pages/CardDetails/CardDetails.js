import React from 'react';
import { FaRegEye, FaStar, FaStarHalf } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const cardInfo = useLoaderData();
    console.log(cardInfo);
    const { details, title, image_url, total_view, trainer, rating } = cardInfo;
    return (
        <div className='w-1/2 mx-auto my-6'>
            <div className="flex flex-col h-auto max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex space-x-4">
                    <img alt="" src={trainer?.choachPic} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <Link href="#" className="text-sm font-semibold">{trainer?.name}</Link>
                        <span className="text-xs dark:text-gray-400">Course Fee : {trainer.fee} </span>
                    </div>
                </div>
                <div>
                    <img src={image_url} alt="" className="object-cover w-full mb-4 h-50 sm:h-80 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                    <h2 className="mb-1 text-xl font-semibold"> * Our course details</h2>
                    <p className="text-sm dark:text-gray-400">
                        {details}
                    </p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='flex items-center'>
                        <FaStar className='text-yellow-500'></FaStar>
                        <FaStar className='text-yellow-500'></FaStar>
                        <FaStarHalf className='text-yellow-500'></FaStarHalf>
                        <span className='ml-1'>{rating.number}</span>
                    </p>

                    <p className='flex items-center'>
                        <FaRegEye></FaRegEye>
                        <span className='ml-2'>{total_view}</span>
                    </p>

                    <button> <Link to={'/checkout'}>Get Access Premium</Link></button>

                </div>
            </div>

        </div>
    );
};

export default CardDetails;