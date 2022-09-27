import React,{useEffect, useState,Fragment} from "react";
import { Outlet, Link, useNavigate, useLocation,useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { spacing } from '@mui/system';
import { Popover,Transition } from '@headlessui/react'
import { GetAnswerRequest,GetSpaceRequest,GetOneUserRequest,LogoutRequest } from '../ReduxSaga/Action/HomePage'
import config from "../config/config";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function HomePage(props){
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [searchParams]=useSearchParams()

    const [selectedHome,setSelectHome]=useState(true)
    const [selectedFollow,setSelectFollow]=useState(false)
    const [selectedAnswer,setSelectAnswer]=useState(false)
    const [selectedNotification,setSelectNotification]=useState(false)
    const [selectedField,setSelectField]=useState(false)
    const [selectedAddQuestion,setAddQuestion]=useState(true)
    const [selectedCreatePost,setCreatePost]=useState(false)
    const dispatch = useDispatch();
    const {answers,spaces,user}=useSelector(state=>state.homePageState)
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [refresh, setRefresh] = useState(false)
    // console.log(location.state.email);

    useEffect(() => {
        dispatch(GetAnswerRequest())
        dispatch(GetSpaceRequest())
        dispatch(GetOneUserRequest(location.state.email))
        setRefresh(false)
    }, [refresh])

    const Logout = async () =>{
        dispatch(LogoutRequest())
        navigate('/login');
    }
 
    const ColorButton = styled(Button)(({ theme }) => ({
        color: '#9f1239',
        borderBottom: '3px solid',
        borderColor: '#9f1239',
      }));
    
    return(
        <div className="relative bg-slate-200">
            <navbar className="z-50 fixed top-0 left-0 right-0 flex flex-row px-28 pt-2 pb-1 space-x-4 bg-white drop-shadow-md ">
                <Link to="/">
                    <h1 className="basis-2/12 font-serif text-3xl text-red-700 font-bold">Quora</h1>
                    
                </Link>
                <div className="basis-4/12 font-serif font-bold text-slate-500">
                <Link to="/">
                    <Tooltip title="Home" placement="bottom">
                        {
                            selectedHome
                            ?
                            <ColorButton href='#'><FontAwesomeIcon  className="h-6" icon={solid('home')}/></ColorButton>
                            :
                            <Button sx={{ color: '#929690',borderBottom: '3px' }} onClick={()=>{setSelectHome(true);setSelectFollow(false);setSelectAnswer(false);setSelectNotification(false)}} href='#'><FontAwesomeIcon className="h-6" icon={solid('home')}/></Button>
                        }
                        
                    </Tooltip>
                </Link>
                    <Link to="Following">
                        <Tooltip title="Following" placement="bottom">
                            {
                                selectedFollow
                                ?
                                <ColorButton href='#'><FontAwesomeIcon  className="h-6" icon={solid('rectangle-list')}/></ColorButton>
                                :
                                <Button sx={{ color: '#929690',borderBottom: '3px' }} onClick={()=>{setSelectHome(false);setSelectFollow(true);setSelectAnswer(false);setSelectNotification(false)}} href='#'><FontAwesomeIcon className="h-6" icon={solid('rectangle-list')}/></Button>
                            }
                            
                        </Tooltip>
                    </Link>

                    <Link to="Answer">
                        <Tooltip title="Answer" placement="bottom">
                            {
                                selectedAnswer
                                ?
                                <ColorButton href='#'><FontAwesomeIcon  className="h-6" icon={solid('pen-to-square')}/></ColorButton>
                                :
                                <Button sx={{ color: '#929690',borderBottom: '3px' }} onClick={()=>{setSelectHome(false);setSelectFollow(false);setSelectAnswer(true);setSelectNotification(false)}} href='#'><FontAwesomeIcon className="h-6" icon={solid('pen-to-square')}/></Button>
                            }
                            
                        </Tooltip>
                    </Link>
                    

                    <Tooltip title="Spaces" placement="bottom">    
                        <Button sx={{ color: '#929690',borderBottom: '3px' }}  href='#'><FontAwesomeIcon className="h-6" icon={solid('people-group')}/></Button>
                    </Tooltip>
                        
                    <Link to="Notification">
                        <Tooltip title="Notifications" placement="bottom">
                            {
                                selectedNotification
                                ?
                                <ColorButton href='#'><FontAwesomeIcon  className="h-6" icon={solid('bell')}/></ColorButton>
                                :
                                <Button sx={{ color: '#929690',borderBottom: '3px' }} onClick={()=>{setSelectHome(false);setSelectFollow(false);setSelectAnswer(false);setSelectNotification(true)}} href='#'><FontAwesomeIcon className="h-6" icon={solid('bell')}/></Button>
                            }
                        </Tooltip>
                    </Link>
                </div>

                <div className="basis-6/12">
                    {
                        selectedField
                        ?
                        <Modal
                        open={selectedField}
                        onClose={()=>setSelectField(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                            <div className="w-full mt-2.5 pl-96 pr-32">
                                <input
                                type='text'
                                className='ml-48 h-9 w-7/12 transition border border-sky-500 rounded '
                                placeholder="Search Quora"/>
                            </div>
                        </Modal>
                        :
                        <div className="flex flex-row mt-0.5 space-x-1">
                            <input
                                type='text'
                                onClick={()=>setSelectField(true)}
                                className='h-9 w-8/12 transition border border-gray-300 hover:border-sky-500 focus:ring-indigo-500 focus:border-indigo-500 rounded '
                                placeholder="Search Quora"
                            />

                            <button className="transition ml-2 mt-1 h-7 pb-1 border rounded-full w-28 bg-gray-100 hover:bg-gray-200 font-semibold">Try Quora+</button>

                            <div className="w-12 h-9">
                                <Popover>
                                    <Popover.Button className="py-1.5 px-2 transition hover:bg-slate-100 hover:opacity-75">
                                        <img className="h-6 w-6 rounded-full" crossOrigin="anonymous" src={config.domain+'/file/'+user.photo}></img>
                                    </Popover.Button>

                                    <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                    >
                                    <Popover.Panel className="absolute z-50 w-72 px-4 right-52 mt-4">
                                        <div className="overflow-auto flex flex-col bg-white border border-gray-300 rounded shadow-md h-96">
                                          <button className="px-2 py-4 transition hover:opacity-50 border-b border-gray-300">
                                            <img className="h-10 w-10 rounded-full" crossOrigin="anonymous" src={config.domain+'/file/'+user.photo}></img>
                                            <div className="flex flex-row items-center">
                                                <div className="text-lg text-left basis-3/4 font-bold">{user.name}</div>
                                                <div className="grid justify-items-end basis-1/4 pr-3 text-gray-500">
                                                    <FontAwesomeIcon className="h-4" icon={solid('chevron-right')}/>
                                                </div>
                                            </div>
                                            <div className="text-sm text-left pr-3">{user.credentials}</div>
                                          </button>

                                          <div className="flex flex-col text-base py-0.5 transition border-b border-gray-300">
                                            <button className="transition hover:bg-slate-100 text-sm text-left px-3 py-2"><FontAwesomeIcon className="h-4 w-4 text-gray-500 mr-2.5" icon={solid('message')}/>Messages</button>
                                            <button className="transition hover:bg-slate-100 text-sm text-left px-3 py-2"><FontAwesomeIcon className="h-4 w-4 text-gray-500 mr-2.5" icon={solid('volume-high')}/>Create Ad</button>
                                            <button className="transition hover:bg-slate-100 text-sm text-left px-3 py-2"><FontAwesomeIcon className="h-4 w-4 text-gray-500 mr-2.5" icon={solid('dollar-sign')}/>Monetization</button>
                                            <button className="transition hover:bg-slate-100 text-sm text-left px-3 py-2"><FontAwesomeIcon className="h-4 w-4 text-gray-500 mr-2.5" icon={solid('signal')}/>Your content and stat</button>
                                            <button className="transition hover:bg-slate-100 text-sm text-left px-3 py-2"><FontAwesomeIcon className="h-4 w-4 text-gray-500 mr-2.5" icon={solid('bookmark')}/>Bookmarks</button>
                                            <button className="transition hover:bg-slate-100 text-sm text-left px-3 py-2"><FontAwesomeIcon className="h-4 w-4 text-gray-500 mr-2.5" icon={solid('pen-to-square')}/>Drafts</button>
                                            <button className="transition hover:bg-slate-100 text-sm text-left px-3 py-2"><FontAwesomeIcon className="h-4 w-4 text-gray-500 mr-2.5" icon={solid('star')}/>Try Quora+</button>
                                          </div>

                                          <div className="flex flex-col text-base py-0.5 transition border-b border-gray-300">
                                            <button className="transition hover:bg-slate-100 text-sm text-left px-3 py-1">Dark mode</button>
                                            <button className="transition hover:bg-slate-100 text-sm text-left px-3 py-1">Settings</button>
                                            <button className="transition hover:bg-slate-100 text-sm text-left px-3 py-1">Languanges</button>
                                            <button className="transition hover:bg-slate-100 text-sm text-left px-3 py-1">Help</button>
                                            <button className="transition hover:bg-slate-100 text-sm text-left px-3 py-1" onClick={() => Logout()}>Logout</button>
                                          </div>

                                          <div className="relative text-sm py-2 px-2 bg-slate-100 text-gray-500">
                                            <button className="hover:underline hover:underline-offset-1">About</button>-
                                            <button className="hover:underline hover:underline-offset-1">Careers</button>-
                                            <button className="hover:underline hover:underline-offset-1">Terms</button>-
                                            <button className="hover:underline hover:underline-offset-1">Privacy</button>-
                                            <button className="hover:underline hover:underline-offset-1">Acceptable Use</button>-
                                            <button className="hover:underline hover:underline-offset-1">Businesess</button>-
                                            <button className="hover:underline hover:underline-offset-1">Press</button>-
                                            <button className="hover:underline hover:underline-offset-1">Your Ad Choices</button>
                                          </div>
                                          
                                        </div>
                                    </Popover.Panel>
                                    </Transition>
                                </Popover>
                                
                            </div>

                            <div className="w-10 h-9 transition text-gray-500 hover:text-gray-600 hover:bg-slate-100 hover:opacity-75">
                                <button className="pt-1.5 px-2"><FontAwesomeIcon  className="h-6" icon={solid('globe')}/></button>
                            </div>
                        </div>
                    }
                </div>

                <div className="flex flex-row basis-2/12 mt-1.5 text-sm font-semibold">
                    <button className="transition h-7 text-white border-r border-rose-800 bg-red-700 hover:bg-red-800 rounded-l-full px-2" onClick={handleOpen}>Add Question</button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        {/* <Box sx={{borderRadius:'16px 16px 16px 16px',borderColor: '#9f1239',position:'absolute',transform: 'translate(-50%, -50%)',top:'50%',left:'50%',bgcolor:'#ffffff',width:700,height:400}}> */}
                            <div className="absolute top-32 left-80 w-3/6 flex flex-col border border-gray-300 rounded-lg bg-white ">
                                <div className="flex flex-row h-12 font-medium">
                                    <div className="basis-1/2">
                                        {
                                            selectedAddQuestion
                                            ?
                                            <button className="w-full h-full rounded-tl-lg border-b-2 border-blue-400">Add Question</button>
                                            :
                                            <button className="w-full h-full border-b-2 border-white transition hover:bg-gray-100 rounded-tl-lg" onClick={()=>{setAddQuestion(true);setCreatePost(false)}}>Add Question</button>
                                        }
                                    </div>

                                    <div className="basis-1/2">
                                        {
                                            selectedCreatePost
                                            ?
                                            <button className="w-full h-full rounded-tl-lg border-b-2 border-blue-400">Create Post</button>
                                            :
                                            <button className="w-full h-full border-b-2 border-white transition hover:bg-gray-100 rounded-tr-lg" onClick={()=>{setAddQuestion(false);setCreatePost(true)}}>Create Post</button>
                                        }
                                    </div>
                                </div>

                                <div className="h-80 overflow-auto">
                                    {
                                        selectedCreatePost
                                        ?
                                        <div className="flex flex-col px-3 pt-3 space-y-2">
                                            <div className="flex flex-row space-x-2 text-gray-600 items-center">
                                                <button>
                                                    <img className="h-4 w-4 rounded-full" crossOrigin="anonymous" src={config.domain+'/file/'+user.photo}></img>
                                                </button>

                                                <FontAwesomeIcon className="h-2 w-2" icon={solid('play')}/>

                                                <button className="transition font-medium rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-300 p-0.5 w-32 px-2"><FontAwesomeIcon className="h-4 w-4 mr-1 " icon={solid('globe')}/>Everyone<FontAwesomeIcon className="h-4 w-4 ml-1" icon={solid('chevron-down')}/></button>
                                            </div>
                                            
                                            <input className="w-full mb-2 h-auto text-base" type="text" placeholder='Say something...'></input>
                                        </div>
                                        :
                                        selectedAddQuestion
                                        ?
                                        <div className="flex flex-col px-3 pt-3 space-y-2">
                                            <div className="flex flex-row space-x-2 text-gray-600 items-center">
                                                <button>
                                                    <img className="h-4 w-4 rounded-full" crossOrigin="anonymous" src={config.domain+'/file/'+user.photo}></img>
        
                                                </button>
                                                
                                                <FontAwesomeIcon className="h-2 w-2" icon={solid('play')}/>

                                                <button className="transition font-medium rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-300 p-0.5 w-28 px-2"><FontAwesomeIcon className="h-4 w-4 mr-1 " icon={solid('user-group')}/>Public<FontAwesomeIcon className="h-4 w-4 ml-1" icon={solid('chevron-down')}/></button>
                                            </div>

                                            <div className="transition border-b border-gray-300 hover:border-sky-500">
                                                <input className="w-full mb-2 h-10 text-xl" type="text" placeholder='Start your question with What,How,Why,etc'></input>
                                            </div>
                                        </div>
                                        :
                                        null
                                    }
                                </div>

                                <div className="h-12 border-t border-gray-300">
                                    {
                                        selectedCreatePost
                                        ?
                                        <div className="flex flex-row pt-2 px-3">
                                            <div className="basis-1/2 flex justify-start text-gray-500 space-x-4">
                                                <button className="transition rounded border border-white hover:border-blue-300 p-0.5"><FontAwesomeIcon className="h-5 w-7" icon={solid('font')}/></button>
                                                <button className="transition rounded border border-white hover:border-blue-300 p-0.5"><FontAwesomeIcon className="h-5 w-7" icon={solid('image')}/></button>
                                            </div>
                                            <div className="basis-1/2 flex justify-end font-medium text-white">
                                                <button className="transition rounded-full bg-blue-500 hover:bg-blue-600 p-0.5 w-16">Post</button>
                                            </div>
                                        </div>
                                        :
                                        selectedAddQuestion
                                        ?
                                        <div className="flex flex-row justify-end space-x-2 px-3">
                                            <div>
                                                <button className="transition rounded-full hover:bg-gray-100 mt-1.5 p-0.5 h-9 w-16 font-medium text-gray-500" onClick={handleClose}>Cancel</button>
                                            </div>

                                            <div>
                                                <button className="transition rounded-full bg-blue-500 hover:bg-blue-600 mt-1.5 p-0.5 h-9 w-32 font-medium text-white">Add Question</button>
                                            </div>
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                            </div>
                        {/* </Box> */}
                    </Modal>
                    <button className="transition h-7 text-white border-l border-rose-800 bg-red-700 hover:bg-red-800 rounded-r-full px-2"><FontAwesomeIcon  className="h-4" icon={solid('chevron-down')}/></button>
                </div>

            </navbar>
            <main className="z-0" onClick={()=>setSelectField(false)}>
                {location.pathname==="/"
                ?
                <div className="flex flex-row space-x-10 pt-20 px-32 pb-5">
                    <div className="basis-2/12 overflow-auto flex flex-col justify-start border-t border-slate-400 text-sm text-slate-800 space-y-1">
                    <button className="transition bg-slate-300 hover:bg-slate-400 border border-slate-300 rounded w-full py-1 pr-12"><FontAwesomeIcon  className="bg-slate-400 border border-slate-400 rounded h-3.5 mx-2" icon={solid('plus')}/>Create Space</button>
                    {
                        spaces && spaces.map(spa=>{
                            return(
                                <button className="flex flex-row items-center transition bg-slate-200 rounded hover:bg-slate-400 w-full py-1 pr-10 space-x-1.5">
                                    <div className="w-1/6">
                                        {
                                                spa.space_user.photo
                                                ?
                                                <img className='mx-3 h-4 w-4 rounded' crossOrigin="anonymous" src={config.domain+'/file/'+spa.photo}/>
                                                :
                                                <>
                                                    No Image
                                                </>
                                        }
                                    </div>
                                        
                                    <div className="w-5/6 pl-2 text-left">{spa.name}</div>
                                    
                                </button>
                            )
                        })
                    }
                    <div className="relative border-t border-slate-400 mt-7 pt-4">
                        <button>About</button>-
                        <button>Careers</button>-
                        <button>Terms</button>-
                        <button>Privacy</button>-
                        <button>Acceptable Use</button>-
                        <button>Businesess</button>-
                        <button>Press</button>-
                        <button>Your Ad Choices</button>
                    </div>
                </div>

                <div className="flex flex-col basis-7/12 space-y-3">
                    <div className="flex flex-col w-full bg-white border border-gray-300 rounded pb-1">
                        <div className="flex flex-row px-3 pt-2.5 text-gray-500">
                            <img className="h-9 w-9 rounded-full mt-1" crossOrigin="anonymous" src={config.domain+'/file/'+user.photo}></img>
                            <button className="pr-64 transition ml-2 mt-1 h-9 w-full pb-1 border rounded-full bg-gray-100 hover:bg-gray-200 font-normal" onClick={handleOpen}>What do you want to ask or share?</button>                
                        </div>

                        <div className="flex flex-row px-3 pt-0.5 text-gray-500 font-medium">
                            <button className="transition ml-2 mt-1 h-9 w-2/6 pb-1 rounded-full hover:bg-gray-200"><FontAwesomeIcon  className="h-4 mx-2" icon={solid('question')}/>Ask</button>
                            <button className="transition ml-2 mt-1 h-9 w-2/6 pb-1 rounded-full hover:bg-gray-200"><FontAwesomeIcon  className="h-4 mx-2" icon={solid('pen-to-square')}/>Answer</button>
                            <button className="transition ml-2 mt-1 h-9 w-2/6 pb-1 rounded-full hover:bg-gray-200"><FontAwesomeIcon  className="h-4 mx-2" icon={solid('pen')}/>Post</button>
                        </div>
                    </div>

                    {
                        answers && answers.map(ans=>{
                            return(
                                <div className="flex flex-col w-full bg-white border border-gray-300 rounded pt-2 pb-1 px-3 space-y-1">
                                    <div className="flex flex-row space-x-2">
                                        {
                                            ans.answer_user.photo
                                            ?
                                            <img className='h-10 w-10 rounded-full border-2' crossOrigin="anonymous" src={config.domain+'/file/'+ans.answer_user.photo}/>
                                            :
                                            <>
                                                No Image
                                            </>
                                        }
                                        <div className="flex flex-col text-sm space-y-0">
                                            <div className="font-bold">{ans.answer_user.name}</div>
                                            <div>{ans.answer_user.credentials}</div> 
                                        </div>
                                    </div>

                                    <div className="font-bold text-base">
                                        {ans.question_answer.content}
                                    </div>

                                    <div>
                                        {ans.content}
                                    </div>

                                    <div  className="flex flex-row text-gray-500">
                                        <div className="flex flex-row w-5/6 space-x-3 items-center">
                                            <div className="flex items-center">
                                                <button className="transition ml-2 mt-1 h-9 bg-slate-200 hover:bg-slate-400 border-r rounded-l-full font-normal p-2">
                                                    <FontAwesomeIcon  className="h-5" icon={solid('thumbs-up')}/>
                                                    {ans.upvote}
                                                </button>

                                                <button className="transition mt-1 h-9 bg-slate-200 hover:bg-slate-400 border-l rounded-r-full font-normal p-2">
                                                    <FontAwesomeIcon  className="h-5" icon={solid('thumbs-down')}/>
                                                    {ans.downvote}
                                                </button>
                                            </div>

                                            <button className="transition ml-2 mt-1 h-9 w-9 rounded-full hover:bg-slate-400 font-normal">
                                                <FontAwesomeIcon  className="h-5" icon={solid('arrows-rotate')}/>
                                            </button>
                                            
                                            <button className="transition ml-2 mt-1 h-9 w-9 rounded-full hover:bg-slate-400 font-normal">
                                                <FontAwesomeIcon  className="h-5" icon={solid('comment-dots')}/>
                                            </button>
                                        </div>

                                        <div className="pl-10 w-1/6">
                                            <button className="transition ml-2 mt-1 h-9 w-9 rounded-full hover:bg-gray-200 font-normal">
                                                <FontAwesomeIcon  className="h-5" icon={solid('share')}/>
                                            </button>   
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex flex-col basis-3/12 -space-y-0.5">
                    <div className="block border border-gray-300 rounded bg-white font-semibold px-3 py-2">
                        Spaces to follow
                    </div>
                    {
                        spaces && spaces.map(splow=>{
                            return(
                                <Popover className="relative">
                                    <Popover.Button className="transition flex flex-row border border-gray-300 bg-white hover:bg-gray-100 items-center transition bg-slate-200 hover:bg-slate-400 w-full py-1 pr-10 space-x-1.5 text-sm">
                                        <div className="flex items-center w-1/6 ">
                                            {
                                                    splow.space_user.photo
                                                    ?
                                                    <img className='mx-3 -mt-5 h-5 w-5 rounded' crossOrigin="anonymous" src={config.domain+'/file/'+splow.photo}/>
                                                    :
                                                    <>
                                                        No Image
                                                    </>
                                            }
                                        </div>
                                            
                                        <div className="flex flex-col w-5/6 pl-2 text-left">
                                            <div>{splow.name}</div>
                                            <div className="text-gray-500">{splow.details}</div>
                                        </div>
                                    </Popover.Button>

                                    <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                    >
                                    <Popover.Panel className="absolute z-10 w-full px-4">
                                        <div className="flex flex-col bg-white border border-gray-300 rounded-lg shadow-md">
                                           <div className="flex flex-row border-b border-gray-300 p-3">
                                                <div className="pt-1">
                                                    <img className='mx-3 h-6 w-6 rounded' crossOrigin="anonymous" src={config.domain+'/file/'+splow.photo}/>
                                                </div>
                                                
                                                <div className="flex flex-col w-5/6 pl-2 text-left">
                                                    <div className="text-base font-bold">{splow.name}</div>
                                                    <div className="text-gray-500 text-sm">{splow.details}</div>
                                                </div>
                                           </div>

                                           <div className="flex flex-row w-full p-2 items-center">
                                                <div className="w-4/6 mr-5">
                                                    <button className="transition h-7 w-24 rounded-full hover:bg-gray-200 text-gray-500 text-sm font-medium"><FontAwesomeIcon  className="mx-1 text-blue-500 h-4" icon={solid('person-circle-plus')}/>Follow</button>
                                                </div>
                                                
                                                <div className="w-1/6 text-gray-500">
                                                    <button className="transition h-7 w-7 rounded-full hover:bg-gray-200"><FontAwesomeIcon  className="h-4" icon={solid('share')}/></button>
                                                </div>
                                                
                                                <div className="w-1/6 text-gray-500">
                                                    <button className="transition h-7 w-7 rounded-full hover:bg-gray-200"><FontAwesomeIcon  className="h-4" icon={solid('ellipsis')}/></button>
                                                </div>
                                           </div>
                                        </div>
                                    </Popover.Panel>
                                    </Transition>
                                </Popover>
                            )
                        })
                    }
                </div>
                </div>
                :
                <Outlet />}
            </main>
        </div>
    )
}