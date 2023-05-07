
import React, { useEffect, useState } from 'react'
import { useNavigate, } from 'react-router-dom'
import Navbar from '../components/navbar'
import Hero from '../components/hero'

function Muvitime() {
    const navigate = useNavigate()
    const [scrolled, setIsScrolled] = useState(false)

    window.onscroll= () =>{
        setIsScrolled(window.pageYOffset === 0 ? false: true)
        return ()=>(window.onscroll=null);
    }
    useEffect(()=>{
        if(!localStorage.getItem('user')) navigate('/signup')
    },[navigate])
    return (
        <div className='min-h-[100vh] bg-black'>
           <Navbar isScrolled={scrolled}></Navbar>
           <div className='absolute top-0 left-0 right-0 h-full '>
            <Hero></Hero>
            <div>SOME OTHER STUFF</div>
           </div>
        </div>
    )
}

export default Muvitime
