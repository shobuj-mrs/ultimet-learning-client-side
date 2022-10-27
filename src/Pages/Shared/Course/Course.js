import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import LeftSideNav from '../LeftSideNav/LeftSideNav';



const Course = () => {

    const courseData = useLoaderData();
    console.log(courseData);

    return (
        <div>
            <h1 className='text-6xl my-4  mx-auto w-1/2 text-purple-400'>Welcome To Our Courses</h1>
            <div className='grid w-11/12 md:grid-cols-9 mx-auto mt-10'>
                <div className='col-span-1'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-8 '>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            courseData.map(course => <CourseCard
                                key={course._id}
                                course={course}

                            ></CourseCard>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Course;