import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Muvitime() {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('user')) navigate('/signup')
    },[])
    return (
        <div>muvitime</div>
    )
}

export default Muvitime
