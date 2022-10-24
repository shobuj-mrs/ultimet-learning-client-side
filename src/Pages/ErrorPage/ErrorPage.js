import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <img style={{ height: "300px" }} className='rounded-2xl' src="https://media.istockphoto.com/vectors/skull-and-crossbones-icon-on-white-background-vector-vector-id539681702?k=20&m=539681702&s=170667a&w=0&h=9JUkclpWwCVPkNxvaAR_pJ5gZkoh0aOfVdGww2TVmfU=" alt="" />

                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-gray-500'>
                        <span className='sr-only'>Error</span>404
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        Sorry, we couldn't find this page.
                    </p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded bg-pink-200 text-gray-900'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage;