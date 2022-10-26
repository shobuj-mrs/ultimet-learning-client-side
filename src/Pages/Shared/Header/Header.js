import React, { useContext, useState } from 'react';
import { Transition, Switch } from "@headlessui/react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import { FaUser, } from 'react-icons/fa';

const Header = () => {
    const [enabled, setEnabled] = useState(false)
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
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
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
                                <div className=' flex justify-center items-center'>



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
                                        className=' rounded-full h-6 mt-3'

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

