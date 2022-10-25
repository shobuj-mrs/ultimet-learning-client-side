import React from 'react';

const Blogs = () => {
    return (
        <div className='w-11/12 mx-auto'>

            <div>
                <h1 className='text-3xl font-bold mb-3'> 1. What is cors?</h1>
                <p className='text-xl mb-4'>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. “CORS” stands for Cross-Origin Resource Sharing. CORS is a protocol and security standard for browsers that helps to maintain the integrity of a website and secure it from unauthorized access.The CORS protocol consists of a set of headers that indicates whether a response can be shared cross-origin. For requests that are more involved than what is possible with HTML's form element, a CORS-preflight request is performed, to ensure the request's current URL supports the CORS protocol.</p>
            </div>
            <div>
                <h1 className='text-3xl font-bold mb-3'> 2. Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p className='text-xl '>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                <p className='text-xl mb-4'>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.Firebase authentication is a service provided by firebase which helps you to build the user authentication system for mobile/web application. It comes with the basic lifecycle methods like Login, Logout, Signup, reset password etc. Also firebase provides an ability to easily integrate your social  oauth logins with a matter of few clicks.</p>
            </div>
            <div>
                <h1 className='text-3xl font-bold mb-3'> 3. How does the private route work?</h1>
                <p className='text-xl mb-4'>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.This is a quick example of how to implement a private route component with React Router 6. The private route component is used to protect selected pages in a React app from unauthenticated users.Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
            </div>
            <div>
                <h1 className='text-3xl font-bold mb-3'> 4. What is Node? How does Node work?</h1>
                <p className='text-xl mb-4'>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                <p className='text-xl mb-4'>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.Node.js Architecture: Node.js is made of Chrome V8 engine which is written in C++ and Libuv which is a multi-platform C library that provides support for asynchronous I/O based events on event loops and thread loops. Don’t worry it is explained in this later at the end. An important thing that we need to remember is that, even though Node.js is made using the V8 engine and Libuv which are written in C or C++, we can still use Node.js in pure JavaScript.</p>
            </div>


        </div>
    );
};

export default Blogs;