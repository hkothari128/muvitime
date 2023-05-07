import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/background-image'
import Header from '../components/header'
import axios, { HttpStatusCode } from 'axios'
import { useNavigate} from 'react-router-dom'
import {toast,toastStyles} from '../js/tw-toast'
function Signup() {
    const [showPassword,setShowPassword] = useState(false)
    const [formsValues,setFormValues] = useState({email:'', password:''})
    const [formError,setFormError] = useState(null)
    const navigate = useNavigate()
    const handleSignup = async () => {
        try {
          const response = await axios.post('http://localhost:5000/api/signup', formsValues);
          console.log(response);
          if(response.status === HttpStatusCode.Created){
            localStorage.setItem('user',formsValues.email)
            navigate('/login')
          }
        } catch (error) {
          console.error(error.response.data.message);
          toast('Error',error.response?.data?.message, toastStyles.error)
        }
      };
   
    useEffect(()=>{
    },[])
    return (
        <Container className='bg-white'>
            <BackgroundImage />
            <div className='content'>
                <Header login/>
                <div className='m-auto'>
                    <div className='text-center w-[90%] m-auto text-white'>
                        <h1 className='text-[3em] font-bold my-5 w-[90%]  mx-auto'>Unlimited movies, Tv shows and more</h1>
                        <h4 className='text-[2em] my-5'>Watch anywhere. Cancel anytime</h4>
                        <h6 className='text-[1em] my-5'>Ready to watch? Enter your email to create or restart membership</h6>
                    </div>
                    <div className='form flex flex-col w-[90%] m-auto text-white'>
                        <div className={`w-full flex md:flex-row  mb-1 ${showPassword ?'flex-col':''}`}>

                        <input className={`p-4 flex-1 ${showPassword ? 'sm:w-[50%]':''} `} type="email" placeholder='Email Address' value={formsValues.email} name='email' onChange={(e)=>{
                            setFormValues({...formsValues,[e.target.name]:e.target.value})
                        }} />
                        {showPassword? 
                        <input className='p-4 flex-1 sm:w-[50%]' type="password" placeholder='Password' value={formsValues.password} name='password' onChange={(e)=>{
                            setFormValues({...formsValues,[e.target.name]:e.target.value})
                        }}/> :
                        <button onClick={()=>setShowPassword(true)} className='bg-primary border-0 rounded-sm  text-white font-semibold p-4 w-[25%]'>Get Started</button>}
                        </div>
                        <button onClick={()=>handleSignup()} className='mt-3 rounded-sm border-0 py-2 px-4 mb-1 w-full mx-auto bg-primary text-white font-semibold'>Sign Up</button>
                        {formError && (<div class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                        <span class="sr-only">Info</span>
                        <div>
                            {formError}
                        </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </Container>
    )
}
const Container = styled.div`
position:relative;
.content {
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(50,50,50,0.75);
    height:100vh;
    width:100vw;
    display:grid;
    grid-template-rows: 15vh 85vh;
    .input {
        width:100%;
    }
}
`;

export default Signup
