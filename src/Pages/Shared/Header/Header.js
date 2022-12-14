import React, { useContext, useState } from 'react';
import { Transition} from "@headlessui/react";
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

