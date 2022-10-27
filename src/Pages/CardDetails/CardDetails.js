import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const info = useLoaderData();
    console.log(info);
    return (
        <div>
            this is checkout{info.name}
            <Link to={'/checkout'}>Get Access Premium</Link>
        </div>
    );
};

export default CardDetails;