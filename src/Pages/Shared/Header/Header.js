import React, { useContext, useState } from 'react';
import { Transition } from "@headlessui/react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import { FaUser, } from 'react-icons/fa';

const Header = () => {

    const [isOpen, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    // 
    return (
        <nav className="bg-pink-400">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                        <div className='flex items-center'>
                            <img
                                className="h-8 w-8"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                alt="Workflow"
                            />
                            <h2 className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-2xl ml-2 font-medium'>Basis of Sports</h2>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    to='/'
                                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Home
                                </Link>
                                <Link
                                   to='/allCourse'
                                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Course
                                </Link>

                                <Link
                                    to='/blogs'
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Blogs
                                </Link>
                                <Link
                                    to='/faq'
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    FAQ
                                </Link>
                                <div className='mx-6 flex justify-center items-center'>

                                    <label className="swap swap-rotate ">


                                        <input
                                            className='flex justify-center items-center'
                                            type="checkbox"
                                        />


                                        <svg className="swap-on fill-current flex justify-center mt-2 items-center w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


                                        <svg className="swap-off fill-current flex justify-center items-center mt-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                    </label>

                                </div>

                                {
                                    user?.uid ?
                                        <>
                                            <span
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                {user?.displayName}
                                            </span>
                                            <button
                                                onClick={handleLogout}
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Log Out
                                            </button>
                                        </>
                                        :
                                        <>
                                            <Link
                                                className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium '
                                                to='/login'
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium '
                                                to='/signup'
                                            >
                                                Sign Up
                                            </Link>
                                        </>
                                }
                                {user?.photoURL ?
                                    <img
                                        src={user?.photoURL}
                                        className=' rounded-full'
                                        style={{ height: '30px' }}
                                        alt="" />
                                    :
                                    <FaUser></FaUser>
                                }
                            </div>

                        </div>

                    </div>
                    <div className="mr-2 flex md:hidden">
                        <button
                            onClick={() => setOpen(!isOpen)}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(toggole) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div toggole={toggole} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                to='/'
                                className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                to='/course'
                                className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Course
                            </Link>

                            <Link
                                to='/blogs'
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Blogs
                            </Link>
                            <Link
                                to='/faq'
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                FAQ
                            </Link>

                            {
                                user?.uid ?
                                    <>
                                        <span
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            {user?.displayName}
                                        </span>
                                        <button
                                            onClick={handleLogout}
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Log Out
                                        </button>
                                    </>
                                    :
                                    <>
                                        <Link
                                            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium '
                                            to='/login'
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium '
                                            to='/signup'
                                        >
                                            Sign Up
                                        </Link>
                                    </>
                            }
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
};

export default Header;

