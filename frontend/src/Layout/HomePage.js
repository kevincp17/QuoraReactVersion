import React,{useEffect, useState} from "react";
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Modal from '@mui/material/Tooltip';
import Box from '@mui/material/Tooltip';
import Typography from '@mui/material/Tooltip';
import Fade from '@mui/material/Tooltip';
import Backdrop from '@mui/material/Backdrop';
import { styled } from '@mui/material/styles';
import { grey,blueGrey } from '@mui/material/colors';
import { GetAnswerRequest,GetSpaceRequest } from '../ReduxSaga/Action/HomePage'
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

export default function HomePage(){
    let location = useLocation();
    const [selectedHome,setSelectHome]=useState(true)
    const [selectedFollow,setSelectFollow]=useState(false)
    const [selectedAnswer,setSelectAnswer]=useState(false)
    const [selectedNotification,setSelectNotification]=useState(false)
    const [selectedField,setSelectField]=useState(false)
    const dispatch = useDispatch();
    const {answers,spaces}=useSelector(state=>state.homePageState)
    console.log(answers);
    console.log(spaces);

    const [modalQuestion,setModalQuestion]=useState(false)
    const handleOpen = () => setModalQuestion(true);
    const handleClose = () => setModalQuestion(false);


    const [refresh, setRefresh] = useState(false)
    console.log(selectedHome);

    useEffect(() => {
        dispatch(GetAnswerRequest())
        dispatch(GetSpaceRequest())
        setRefresh(false)
    }, [refresh])
 
    const ColorButton = styled(Button)(({ theme }) => ({
        color: '#9f1239',
        borderBottom: '3px solid',
        borderColor: '#9f1239',
      }));
    
    return(
        <div className="relative bg-slate-200">
            <navbar className="z-50 fixed top-0 left-0 right-0 flex flex-row px-28 pt-2 pb-1 space-x-4 bg-white drop-shadow-md ">
                <Link to="/" onClick={() => location.pathname.reload()}>
                    <h1 className="basis-2/12 font-serif text-3xl text-red-700 font-bold">Quora</h1>
                </Link>
                <div className="basis-4/12 font-serif font-bold text-slate-500">
                    <Tooltip title="Home" placement="bottom">
                        {
                            selectedHome
                            ?
                            <ColorButton href='#'><FontAwesomeIcon  className="h-6" icon={solid('home')}/></ColorButton>
                            :
                            <Button sx={{ color: '#929690',borderBottom: '3px' }} onClick={()=>{setSelectHome(true);setSelectFollow(false);setSelectAnswer(false);setSelectNotification(false)}} href='#'><FontAwesomeIcon className="h-6" icon={solid('home')}/></Button>
                        }
                        
                    </Tooltip>

                    <Tooltip title="Following" placement="bottom">
                        {
                            selectedFollow
                            ?
                            <ColorButton href='#'><FontAwesomeIcon  className="h-6" icon={solid('rectangle-list')}/></ColorButton>
                            :
                            <Button sx={{ color: '#929690',borderBottom: '3px' }} onClick={()=>{setSelectHome(false);setSelectFollow(true);setSelectAnswer(false);setSelectNotification(false)}} href='#'><FontAwesomeIcon className="h-6" icon={solid('rectangle-list')}/></Button>
                        }
                        
                    </Tooltip>

                    <Tooltip title="Answer" placement="bottom">
                        {
                            selectedAnswer
                            ?
                            <ColorButton href='#'><FontAwesomeIcon  className="h-6" icon={solid('pen-to-square')}/></ColorButton>
                            :
                            <Button sx={{ color: '#929690',borderBottom: '3px' }} onClick={()=>{setSelectHome(false);setSelectFollow(false);setSelectAnswer(true);setSelectNotification(false)}} href='#'><FontAwesomeIcon className="h-6" icon={solid('pen-to-square')}/></Button>
                        }
                        
                    </Tooltip>

                    <Tooltip title="Spaces" placement="bottom">    
                        <Button sx={{ color: '#929690',borderBottom: '3px' }}  href='#'><FontAwesomeIcon className="h-6" icon={solid('people-group')}/></Button>
                    </Tooltip>

                    <Tooltip title="Notifications" placement="bottom">
                        {
                            selectedNotification
                            ?
                            <ColorButton href='#'><FontAwesomeIcon  className="h-6" icon={solid('bell')}/></ColorButton>
                            :
                            <Button sx={{ color: '#929690',borderBottom: '3px' }} onClick={()=>{setSelectHome(false);setSelectFollow(false);setSelectAnswer(false);setSelectNotification(true)}} href='#'><FontAwesomeIcon className="h-6" icon={solid('bell')}/></Button>
                        }
                    </Tooltip>
                </div>

                <div className="basis-6/12">
                    {
                        selectedField
                        ?
                        <div className="grid grid-cols-12 gap-4 mt-0.5">
                            <input
                            type='text'
                            className='col-span-12 h-9 transition border border-sky-500 rounded '
                            placeholder="Search Quora"/>
                        </div>
                        :
                        <div className="flex flex-row mt-0.5 space-x-1">
                            <input
                                type='text'
                                onClick={()=>setSelectField(true)}
                                className='h-9 w-8/12 transition border border-gray-300 hover:border-sky-500 focus:ring-indigo-500 focus:border-indigo-500 rounded '
                                placeholder="Search Quora"
                            />

                            <button className="transition ml-2 mt-1 h-7 pb-1 border rounded-full w-28 bg-gray-100 hover:bg-gray-200 font-semibold">Try Quora+</button>

                            <div className="w-12 h-9 transition hover:bg-slate-100 hover:opacity-75">
                                <button className="pt-1.5 px-2" onClick={()=>setModalQuestion(true)}><img className="h-6 w-6 rounded-full" src="https://media-exp1.licdn.com/dms/image/C4E03AQG1ZuvjtoCrpg/profile-displayphoto-shrink_200_200/0/1645879659085?e=1663804800&v=beta&t=nkUnsJLhJ2f8lS73AkNfSC6J4T80OaqtSPCj4b_Ho38"></img></button>
                            </div>

                            <div className="w-10 h-9 transition text-gray-500 hover:text-gray-600 hover:bg-slate-100 hover:opacity-75">
                                <button className="pt-1.5 px-2"><FontAwesomeIcon  className="h-6" icon={solid('globe')}/></button>
                            </div>
                        </div>
                    }
                </div>

                <div className="flex flex-row basis-2/12 mt-1.5 text-sm font-semibold">
                    <button className="transition h-7 text-white border-r border-rose-800 bg-red-700 hover:bg-red-800 rounded-l-full px-2" onClick={()=>setModalQuestion(true)}>Add Question</button>
                    
                    <button className="transition h-7 text-white border-l border-rose-800 bg-red-700 hover:bg-red-800 rounded-r-full px-2"><FontAwesomeIcon  className="h-4" icon={solid('chevron-down')}/></button>
                </div>

            </navbar>
            <main className="z-0 flex flex-row space-x-10 pt-20 px-32 pb-5" onClick={()=>setSelectField(false)}>
                <div className="basis-2/12 overflow-auto flex flex-col justify-start border-t border-slate-400 text-sm text-slate-800 space-y-1">
                    <button className="transition bg-slate-300 hover:bg-slate-400 border border-slate-300 rounded w-full py-1 pr-12"><FontAwesomeIcon  className="bg-slate-400 border border-slate-400 rounded h-3.5 mx-2" icon={solid('plus')}/>Create Space</button>
                    {
                        spaces && spaces.map(spa=>{
                            return(
                                <button className="flex flex-row items-center transition bg-slate-200 hover:bg-slate-400 w-full py-1 pr-10 space-x-1.5">
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
                        <div className="flex flex-row px-3 pt-2.5">
                            <img className="h-9 w-9 rounded-full mt-1" src="https://media-exp1.licdn.com/dms/image/C4E03AQG1ZuvjtoCrpg/profile-displayphoto-shrink_200_200/0/1645879659085?e=1663804800&v=beta&t=nkUnsJLhJ2f8lS73AkNfSC6J4T80OaqtSPCj4b_Ho38"></img>
                            <button className="pr-64 transition ml-2 mt-1 h-9 w-full pb-1 border rounded-full w-28 bg-gray-100 hover:bg-gray-200 font-normal">What do you want to ask or share?</button>
                        </div>

                        <div className="flex flex-row px-3 pt-0.5">
                            <button className="transition ml-2 mt-1 h-9 w-2/6 pb-1 rounded-full hover:bg-gray-200 font-normal"><FontAwesomeIcon  className="h-4 mx-2" icon={solid('question')}/>Ask</button>
                            <button className="transition ml-2 mt-1 h-9 w-2/6 pb-1 rounded-full hover:bg-gray-200 font-normal"><FontAwesomeIcon  className="h-4 mx-2" icon={solid('pen-to-square')}/>Answer</button>
                            <button className="transition ml-2 mt-1 h-9 w-2/6 pb-1 rounded-full hover:bg-gray-200 font-normal"><FontAwesomeIcon  className="h-4 mx-2" icon={solid('pen')}/>Post</button>
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

                                    <div  className="flex flex-row">
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

                <div className="basis-3/12">
                    <div className="block border border-gray-300 rounded bg-white font-semibold px-3 py-2">
                        Spaces to follow
                    </div>
                </div>
            </main>
        </div>
    )
}