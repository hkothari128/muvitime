import axios, { HttpStatusCode } from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { toast, toastStyles } from '../js/tw-toast'
import BackgroundImage from '../components/background-image'
import Header from '../components/header'

function Login() {

    const [formsValues,setFormValues] = useState({email:'', password:''})
    const [formError,setFormError] = useState(null)
    const navigate = useNavigate()
    const handleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:5000/api/login', formsValues);
          console.log(response);
          if(response.status === HttpStatusCode.Ok){
            localStorage.setItem('user',formsValues.email)
            navigate('/')
          }
        } catch (error) {
          console.error(error.response.data.message);
          toast('Error',error.response?.data?.message, toastStyles.error)
        }
      };
    return (
        <Container className='bg-white'>
            <BackgroundImage />
            <div className='content'>
                <Header/>
                <div className='m-auto md:w-[50%]'>
                    <div className='form flex flex-col items-center justify-around md:w-[40%] m-auto text-white bg-black bg-opacity-50 p-11' >
                        <h1 className='text-[2em] '>Login</h1>
                        <input className=' md:w-[70%] px-4 py-2 mx-auto my-4 ' type="email" placeholder='Email Address' value={formsValues.email} name='email' onChange={(e)=>{
                            setFormValues({...formsValues,[e.target.name]:e.target.value})
                        }} />
                        <input className='md:w-[70%] px-4 py-2 mx-auto' type="password" placeholder='Password' value={formsValues.password} name='password' onChange={(e)=>{
                            setFormValues({...formsValues,[e.target.name]:e.target.value})
                        }}/>
                        
                        <button onClick={()=>handleLogin()} className=' w-[80%] mt-8 rounded-sm border-0 py-2 px-4 mb-4 mx-auto bg-primary text-white font-semibold'>Log In</button>
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
    background-color:rgba(50,50,50,0.7);
    height:100vh;
    width:100vw;
    display:grid;
    grid-template-rows: 15vh 85vh;
    .input {
        width:100%;
    }
}
`;

export default Login
