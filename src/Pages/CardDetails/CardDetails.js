import React from 'react';
import { FaDownload, FaRegEye, FaStar, FaStarHalf } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CardDetails = () => {

    const cardInfo = useLoaderData();
    console.log(cardInfo);
    const { details, category_id
        , title, image_url, total_view, trainer, rating } = cardInfo;
    return (

        <div>
            <div className='flex justify-center my-6'>
                <h1 className='text-4xl text-purple-500 font-bold '>{title}</h1>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf} className='mx-3 text-3xl'> <FaDownload /></button>}
                </Pdf>

            </div>
            <div ref={ref}>


                <div className='w-9/12	mx-auto my-6'>
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

                            <button className='bg-purple-500 hover:bg-pink-500 text-white text-xl font-semibold px-3 py-2 rounded-lg'> <Link to={`/checkout/${category_id
                                }`}>Get Access Premium</Link></button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CardDetails;