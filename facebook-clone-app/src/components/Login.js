import React from 'react'

const Login = () => {
  return (
    <div className='bg-gray-200 mx-auto my-auto h-[100vh] w-[100vw]'>
        <section className=" body-font relative">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className='w-2/3 my-auto'>
                    <img className="w-96 fb_logo _8ilh img" src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg" alt="Facebook"/>
                    <div className='w-2/3 mx-8 text-3xl text-left text-black font-semibold flex justify-start'>Facebook helps you connect and share with the people in your life.</div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <div className="relative mb-4">
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-lightblue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Email address or phone number'/>
                </div>
                <div className="relative mb-4">
                    <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-lightblue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Password'/>
                </div>

                <button className="text-white font-semibold bg-darkblue border-0 py-2 px-6 focus:outline-none hover:bg-lightblue rounded text-lg">Login</button>
                <a className="text-md hover:text-darkblue cursor-pointer hover:underline text-lightblue mt-3">Forgot password?</a>
                <hr className='my-6'/>
                <button className="mx-auto w-2/3 font-semibold text-white bg-[#36a420] border-0 py-2 px-6 focus:outline-none hover:bg-[#36a420] rounded text-lg">Create new Account</button>
                </div>
            </div>
            </section>
    </div>
  )
}

export default Login