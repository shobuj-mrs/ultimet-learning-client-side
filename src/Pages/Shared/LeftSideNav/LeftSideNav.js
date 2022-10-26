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
                courseTitle.map(trainingTitle => <div key={trainingTitle.id}>
                    <h1>
                        <Link to={`/trainingTitle/${trainingTitle.id}`}>
                            {trainingTitle.name}
                        </Link>
                    </h1>
                </div>)
            }

        </div>
    );
};

export default LeftSideNav;