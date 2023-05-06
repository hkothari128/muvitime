import React from 'react'
import styled from 'styled-components'
import Logo from './logo';
import { useNavigate } from 'react-router-dom';

function Header({login}) {
    const navigate = useNavigate()
    return (
        <Container className='flex flex-row px-8 items-center justify-between'>
            <Logo></Logo>
            <button className='bg-primary border-0 text-white px-4 rounded-sm py-2 font-semibold' 
            onClick={()=>{navigate(login?"/login":"/signup")}}>{login? "Log In": "Sign Up"}</button>
        </Container>
    )
}
const Container = styled.div``;
export default Header
