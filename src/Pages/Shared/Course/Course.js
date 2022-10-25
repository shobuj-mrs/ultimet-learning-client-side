import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';



const Course = () => {
    const courseTitle = useLoaderData();
    console.log(courseTitle);
    const { id, name } = courseTitle;


    return (
        <div>

            <h3>Our Courses : {courseTitle.length}</h3>
            {
                courseTitle.map(course => <p key={course.id}>
                    <Link></Link>
                </p>)
            }

        </div>
    );
};

export default Course;