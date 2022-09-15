import * as React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import config from "../config/config";
export default function LoginPage(){
  return (
    <div className='flex justify-center py-20 h-screen' style={{ backgroundImage: "url(/bgimage.jpg)",backgroundSize: 'cover',overflow: 'hidden', }}>
      <div className='flex flex-col bg-white border border-gray-300 w-3/6 rounded'>
        <div className='flex justify-center basis-2/12 font-serif text-6xl pt-12 pb-2 text-red-700 font-bold'>
            Quora
        </div>

        <div className='flex justify-center text-gray-700 font-bold'>
            The place to share knowledge and understand the world better
        </div>

        <div className='flex flex-row mt-8'>
            <div className='flex flex-col items-center basis-1/2 border-r border-gray-300 px-5 space-y-3 pt-3'>
                <div className='text-gray-500 text-sm'>
                    By continuing, you indicate that you agree to <a className='text-blue-500' href='#'>Quora's Terms of Service</a> and <a className='text-blue-500' href='#'>Privacy Policy</a>.
                </div>

                <div className='flex flex-col w-full space-y-2 pt-3'>
                    <button className='flex flex-row transition border border-gray-300 hover:bg-gray-100 p-1.5 rounded h-10'>
                      <img className='mt-0.5 mx-3 h-5 w-5 rounded' crossOrigin="anonymous" src={config.domain+'/file/google.png'}/>
                      Proceed with Google
                    </button>

                    <button className='flex flex-row transition border border-gray-300 hover:bg-gray-100 p-1.5 rounded h-10'>
                      <img className='mt-0.5 mx-3 h-5 w-5 rounded' crossOrigin="anonymous" src={config.domain+'/file/facebook.png'}/>
                      Proceed with Facebook
                    </button>

                    <button className='transition hover:bg-gray-100 p-1.5 rounded-full h-8 text-sm font-medium text-gray-500'>Register with Email</button>
                </div>
            </div>

            <div className='flex flex-col basis-1/2 px-5 space-y-3'>
                <h3 className='font-medium border-b border-gray-300 pb-2'>Login</h3>

                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold'>Email</label>
                    <input type="text" className='h-9 transition border border-gray-300 hover:border-blue-500 rounded px-2' placeholder='Your Email'></input>
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold'>Password</label>
                    <input type="text" className='h-9 transition border border-gray-300 hover:border-blue-500 rounded px-2' placeholder='Your Password'></input>
                </div>

                <div className='flex flex-row items-center mt-5'>
                  <div className='grid justify-items-start basis-1/2 text-sm text-gray-500'>
                      <a href="#">Forgot Password?</a>
                  </div>

                  <div className='grid justify-items-end basis-1/2 text-white font-bold'>
                        <button className='h-10 w-24 bg-blue-400 rounded-full p-2'>Login</button>
                  </div> 
                </div>
            </div>
        </div>
        
        <div className='flex flex-row items-center transition border-t border-gray-300 bg-gray-100 mt-7 text-gray-500 text-sm space-x-2 h-full pl-6'>
          <button className='hover:underline hover:underline-offset-1'>About</button>
          <button className='hover:underline hover:underline-offset-1'>Careers</button>
          <button className='hover:underline hover:underline-offset-1'>Privacy</button>
          <button className='hover:underline hover:underline-offset-1'>Terms</button>
          <button className='hover:underline hover:underline-offset-1'>Contact</button>
          <button className='hover:underline hover:underline-offset-1'>Languange</button>
          <button className='hover:underline hover:underline-offset-1'>Your Ad Choices</button>
          <button className='hover:underline hover:underline-offset-1'>Press</button>
          <div>© Quora, Inc. 2022</div>
        </div>
      </div>
    </div>
  );
}