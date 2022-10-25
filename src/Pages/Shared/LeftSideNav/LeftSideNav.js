import React, { useEffect, useState } from 'react';

const LeftSideNav = () => {
    const [coursetitle, setCourseTile] = useState(null);

    useEffect(() => {
        fetch('https://assignment-10-the-ultimate-learning-server-side.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCourseTile(data))
    }, [])

    return (
        <div>
            <h3>Our Courses : {coursetitle.length}</h3>
        </div>
    );
};

export default LeftSideNav;