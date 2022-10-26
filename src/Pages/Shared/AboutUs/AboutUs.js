import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <img
                style={{ height: "150px" }}
                className='mx-auto rounded-2xl my-4'
                src="https://i.pinimg.com/originals/0a/33/bd/0a33bd4b05b5252a26047157040ebd7f.jpg" alt="" />
            <h1 className='text-2xl w-60 mx-auto text-pink-500 font-bold'>Name : MR Sobuz</h1>

            <div className='w-11/12 mx-auto'>
                <div>
                    <h1 className='text-2xl font-semibold my-3'> 1. Establish a mission statement.</h1>
                    <p>Your about page can and will be more comprehensive than a single mission statement. However, to draw people in, you need to succinctly state your goal in the industry up front. What is your business here to do? Why should your website visitors care? This information will give the reader something to remember about your company long after they leave your website.</p>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold my-3'> 2. Outline your company story.</h1>
                    <p>Every business has a story to tell. Even if you're running a start-up with a short history, you’ll want to share your company’s origin. Talk about how you got to where you are today on your about page. </p>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold my-3'> 3. Explain what you're offering them.</h1>
                    <p className='mb-6'>Companies often generalize their offering in the website copy, making it hard to understand what the customer is actually paying for. In a sentence or two, explain exactly what a potential customer will gain from your business. This succinct summary will keep visitors on your website for longer and get them interested in learning more.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;