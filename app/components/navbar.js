"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center">
                    <Image src="/logo.png" alt="Your Logo her" className="h-10 cursor-pointer" width={40} height={40} />
                    {/* for logo size */}
                    {/* Adjust logo size */}
                </div>
                <h1 className="text-white text-lg text-center flex-1 home-company-header">Ask My Data</h1>

                <div>

                    
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 cursor-pointer mr-2"
                        onClick={toggleModal}>
                        Sign Up
                    </button>

                    <Link href="/login">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 cursor-pointer">
                            Login
                        </button>
                    </Link>

                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50" onClick={toggleModal}></div>
                    <div className="bg-white p-6 rounded shadow-lg z-10 w-1/3">
                        <h1 className="text-xl mb-4 text-center sign-up-title">Welcome</h1>
                        <span className='text-center block text-color-opacity-1'>Sign in or sign up to continue</span>
                        <form>

                            {/* public\assests\icons\google_icon.png */}
                            <button type="button" className="flex items-center sign-up-buttons ">
                                <Image src="/assets/icons/google_icon.png" alt="Google Logo" className="h-6 mr-2" width={30} height={30} /> {/* Adjust height as needed */}
                                Continue with Google
                            </button>

                            <Link href="/signup">
                                <button type="button" className="flex items-center sign-up-buttons bg-blue-600">
                                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
                                    Continue with email
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            )}

        </nav>
    )
}

export default Navbar