import React from 'react'

const Register = () => {
  return (
    <div className='bg-gray-200 mx-auto my-auto h-[100vh] w-[100vw]'>
        <section className=" body-font relative">
            <div className="container px-5 py-10 mx-auto flex flex-wrap">
                <div className='w-2/3 my-auto'>
                    <img className="w-96 fb_logo _8ilh img" src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg" alt="Facebook"/>
                    <div className='w-2/3 mx-8 text-3xl text-left text-black font-semibold flex justify-start'>Facebook helps you connect and share with the people in your life.</div>
                </div>
                <form action='POST' className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <div className='flex-col items-start text-left justify-start'>
                    <div className='font-bold text-3xl'>Regsiter</div>
                    <div>Its quick and easy</div>
                    <hr className='my-6'/>
                </div>

                <div className="relative mb-4">
                    <input type="text" id="fname" name="fname" className="w-full bg-white rounded border border-gray-300 focus:border-lightblue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='First Name'/>
                </div>
                <div className="relative mb-4">
                    <input type="text" id="lname" name="lname" className="w-full bg-white rounded border border-gray-300 focus:border-lightblue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Last name'/>
                </div>
                <div className="relative mb-4">
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-lightblue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Email address or phone number'/>
                </div>
                <div className="relative mb-4">
                    <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-lightblue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='New Password'/>
                </div>
                <div className="relative mb-4">
                    <input type="file" id="picture" name="picture" className="w-full bg-white rounded border border-gray-300 focus:border-lightblue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Profile Picture'/>  
                </div>
                <select id="gender" name="gender" className="w-full bg-white rounded border border-gray-300 focus:border-lightblue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <hr className='my-2'/>
                <p className='text-xs text-left'>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
                <p className='text-xs text-left'>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time</p>
                <button className="mx-auto my-4 w-2/3 font-semibold text-white bg-[#36a420] border-0 py-2 px-6 focus:outline-none hover:bg-[#36a420] rounded text-lg">Create new Account</button>
                </form>
            </div>
            </section>
    </div>
  )
}

export default Register