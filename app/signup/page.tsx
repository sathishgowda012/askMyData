import React from 'react'

const signUp = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="rounded overflow-hidden shadow-lg w-96">
                <div className="px-6 py-4">
                    <h1 className="text-xl mb-4 text-center">Welcome</h1>
                    <span className='text-center block text-color-opacity-1'>Sign up to continue Ask my Data</span>

                    <form className='signup-login mt-5'>

                        <div className="relative">
                            <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer input-border" placeholder=" " />
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-grey-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email address*</label>
                        </div>

                        <div className="relative mt-4">
                            <input type="password" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer input-border" placeholder=" " />
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-grey-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password*</label>
                        </div>

                        <div className='input-border rounded-md mt-2 p-3'>
                            <span className='text-sm'>Your password must contain:</span>

                            <ul className='list-disc ml-3.5 text-sm sign-list'>
                                <li>At least 8 characters</li>
                                <li>At least 3 of the following:</li>
                                <div className='ml-3.5'>
                                    <ul className='list-disc text-sm'>
                                        <li>Lower case letters (a-z)</li>
                                        <li>Upper case letters (A-Z)</li>
                                        <li>Numbers (0-9)</li>
                                        <li>Special characters (e.g. !@#$%^&*)</li>
                                    </ul>
                                </div>

                            </ul>
                        </div>

                        <button type="button" className="flex font-medium items-center rounded-md sign-up-buttons bg-blue-600">
                            Continue
                        </button>

                        <span className='text-sm'>Already have an account ? <a className='cursor-pointer font-medium text-blue-600 dark:text-blue-600'> Log In</a></span>

                    </form>

                </div>
            </div>

        </div>
    )
}

export default signUp