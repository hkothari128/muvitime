import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './logo';

function Navbar( {isScrolled}) {
    const [showSearch, setShowSearch] = useState(false)
    return (
        <Container className='sticky top-0 z-10' >
        <div className={`p-0  ${isScrolled?'bg-black': 'bg-transparent'} shadow-sm-light text-white navbar bg-base-100 w-full`}>
            <div className="p-4">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                    <a className="justify-between">
                        Parent
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                    </a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
                </div>
                    <Logo></Logo>
                {/* <a className="btn btn-ghost normal-case text-xl">
                </a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                <li><a className='btn btn-sm bg-transparent'>Home</a></li>
                <li><a className='btn btn-sm bg-transparent'>Tv Shows</a></li>
                <li><a className='btn btn-sm bg-transparent'>Movies</a></li> 
                <li><a className='btn btn-sm bg-transparent'>My List</a></li>
                </ul>
            </div>
            <div className="navbar-end ml-auto p-4">
            <div className="form-control  flex flex-row items-center relative h-fit mx-2">
            <input type="text" autoFocus onBlur={()=>setShowSearch(false)} placeholder="Search" 
            className={`h-4 md:h-auto input input-bordered rounded-none transition-all duration-1000 ease-out ${showSearch?'w-auto opacity-100':'opacity-0'}`} /> 
                <button onClick={()=>setShowSearch(true)} className={`absolute right-4  btn btn-sm  btn-ghost btn-circle ${showSearch?'text-black':''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
                <a className=" border-0 text-white px-4 rounded-sm font-semibold btn-sm md:btn-md md:text-lg btn bg-primary">Logout</a>
            </div>
        </div>
        </Container>
    )
}

const Container = styled.div``;

export default Navbar
