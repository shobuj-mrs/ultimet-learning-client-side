import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    console.log(course);
    const { details, _id, title, image_url, total_view, fee, img, name, rating } = course;
    return (
        <div>
            <div className="flex flex-col h-auto max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex space-x-4">
                    <img alt="" src={img} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <Link href="#" className="text-sm font-semibold">{name}</Link>
                        <span className="text-xs dark:text-gray-400">4 hours ago</span>
                    </div>
                </div>
                <div>
                    <img src={image_url} alt="" className="object-cover w-full mb-4 h-50 sm:h-80 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                    <p className="text-sm dark:text-gray-400">
                        {
                            details.length > 200 ?
                                <p> {details.slice(0, 200) + '...'} <Link to={`/courses/${_id}`}>Read more</Link></p>
                                :
                                <p>{details} </p>
                        }
                    </p>
                </div>

            </div>
        </div>

    );
};

export default CourseCard;