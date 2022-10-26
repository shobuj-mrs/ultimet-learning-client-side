import React from 'react';
import { FaStar, FaStarHalf, FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    console.log(course);
    const { details, _id, title, image_url, total_view, trainer, rating } = course;
    return (
        <div>
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
                    <p className="text-sm dark:text-gray-400">
                        {
                            details.length > 200 ?
                                <p> {details.slice(0, 200) + '...'} <button
                                className='hover:bg-pink-600 px-2 py-1 rounded-lg'

                                > <Link to={`/courses/${_id}`}>Read more</Link></button></p>
                                :
                                <p>{details} </p>
                        }
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

                </div>
            </div>
        </div>

    );
};

export default CourseCard;