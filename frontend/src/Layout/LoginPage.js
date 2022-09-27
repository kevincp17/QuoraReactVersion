import React,{useEffect, useState,Fragment} from "react";
import { Outlet, Link, useNavigate, useLocation,createSearchParams } from 'react-router-dom';
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import config from "../config/config";
import Modal from '@mui/material/Modal';
import { RegisterRequest,LoginRequest,GetUserRequest } from '../ReduxSaga/Action/LoginPage'

export default function LoginPage(){
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [openRegister,setModalRegister]=useState(false)
  const [selectNext,setSelectedNext]=useState(false)
  const [id, setId] = useState()

  const formikLogin = useFormik({
    initialValues: {
        email: '',
        password: '',
    },
    onSubmit: async (values) => {
            const payload = {
              email: values.email,
              password: values.password
            };
            dispatch(LoginRequest(payload))
            navigate('/',{
              state:{
                email:payload.email
              }
            });
        }
    })

    const formikRegister = useFormik({
      initialValues: {
          name: '',
          email: '',
          password: '',
          confPassword: '',
      },
      onSubmit: async (values) => {
          const payload = {
            name: values.name,
            email: values.email,
            password: values.password,
            confPassword: values.confPassword
          };
          console.log(values);
          dispatch(RegisterRequest(payload))
          // props.closeAdd();
          window.alert('Data Succesfully Insert')
          // props.onRefresh();
      }
    })

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

                    <button className='transition hover:bg-gray-100 p-1.5 rounded-full h-8 text-sm font-medium text-gray-500' onClick={()=>setModalRegister(true)}>Register with Email</button>
                    <Modal
                        open={openRegister}
                        onClose={()=>setModalRegister(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                      <div className="flex flex-col absolute top-32 left-96 w-5/12 ml-5 flex flex-col border border-gray-300 rounded-lg bg-white">
                        <div className="p-3 h-72">
                            <div className="font-semibold text-lg">Register</div>

                            <div className="flex flex-col space-y-1 mt-3">
                              <label className="font-bold text-sm">Name</label>
                              <input 
                              type="text" 
                              className='h-9 transition border border-gray-300 hover:border-blue-500 rounded px-2' 
                              placeholder='What name do you want to use?'
                              name="name"
                              id="name"
                              value={formikRegister.values.name}
                              onChange={formikRegister.handleChange}
                              onBlur={formikRegister.handleBlur}
                              autoComplete="name"/>
                            </div>

                            <div className="flex flex-col space-y-1 mt-3">
                              <label className="font-bold text-sm">Email</label>
                              <input 
                              type="text" 
                              className='h-9 transition border border-gray-300 hover:border-blue-500 rounded px-2' 
                              placeholder='Your Email'
                              name="email"
                              id="email"
                              value={formikRegister.values.email}
                              onChange={formikRegister.handleChange}
                              onBlur={formikRegister.handleBlur}
                              autoComplete="email"/>
                            </div>

                            <div className="flex flex-col space-y-1 mt-3">
                              <label className="font-bold text-sm">Password</label>
                              <input 
                              type="password" 
                              className='h-9 transition border border-gray-300 hover:border-blue-500 rounded px-2' 
                              placeholder='Your Password'
                              name="password"
                              id="password"
                              value={formikRegister.values.password}
                              onChange={formikRegister.handleChange}
                              onBlur={formikRegister.handleBlur}
                              autoComplete="email"/>
                            </div>

                            <div className="flex flex-col space-y-1 mt-3">
                              <label className="font-bold text-sm">Confirm Password</label>
                              <input 
                              type="password" 
                              className='h-9 transition border border-gray-300 hover:border-blue-500 rounded px-2' 
                              placeholder='Confirm Your Password'
                              name="confPassword"
                              id="confPassword"
                              value={formikRegister.values.confPassword}
                              onChange={formikRegister.handleChange}
                              onBlur={formikRegister.handleBlur}
                              autoComplete="confPassword"/>
                            </div>
                        </div>
                        
                        <div className="grid justify-items-end border-t border-gray-300 mt-16 font-medium text-white h-12 px-3 py-1">                   
                            <button className="transition rounded-full bg-blue-500 hover:bg-blue-600 p-0.5 w-16" onClick={formikRegister.handleSubmit}>Register</button>
                        </div>
                      </div>
                    </Modal>
                </div>
            </div>

            <div className='flex flex-col basis-1/2 px-5 space-y-3'>
                <h3 className='font-medium border-b border-gray-300 pb-2'>Login</h3>

                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold'>Email</label>
                    <input 
                    type="text" 
                    className='h-9 transition border border-gray-300 hover:border-blue-500 rounded px-2' 
                    placeholder='Your Email'
                    name="email"
                    id="email"
                    value={formikLogin.values.email}
                    onChange={formikLogin.handleChange}
                    onBlur={formikLogin.handleBlur}
                    autoComplete="email"/>
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className='text-sm font-bold'>Password</label>
                    <input 
                    type="password" 
                    className='h-9 transition border border-gray-300 hover:border-blue-500 rounded px-2' 
                    placeholder='Your Password'
                    name="password"
                    id="password"
                    value={formikLogin.values.password}
                    onChange={formikLogin.handleChange}
                    onBlur={formikLogin.handleBlur}
                    autoComplete="password"/>
                </div>

                <div className='flex flex-row items-center mt-5'>
                  <div className='grid justify-items-start basis-1/2 text-sm text-gray-500'>
                      <a href="#">Forgot Password?</a>
                  </div>

                  <div className='grid justify-items-end basis-1/2 text-white font-bold'>
                    <Link to="/Home">
                        <button className='h-10 w-24 bg-blue-400 rounded-full p-2' onClick={formikLogin.handleSubmit}>Login</button>
                    </Link>
                        
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