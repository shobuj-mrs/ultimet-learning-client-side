import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courseTitle, setCourseTile] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-the-ultimate-learning-server-side.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCourseTile(data))
    }, [])

    return (
        <div>


            <h3>Our Courses : {courseTitle.length}</h3>
            {
                courseTitle.map(courses => <div key={courses.id}>
                    <h1>
                        <button 
                        className='bg-pink-400 text-white hover:bg-pink-700 hover:font-semibold w-4/5 mx-auto mt-3 px-2 hover:px-3 hover:py-2 rounded-lg'
                        >
                            <Link to={`/courses/${courses.id}`}>
                                {courses.name}
                            </Link>
                        </button>
                    </h1>
                </div>)
            }

        </div>
    );
};

export default LeftSideNav;