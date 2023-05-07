import React from 'react'
import styled from 'styled-components'

function BackgroundImage() {
    return (
        <Container  className='bg-[url("https://wallpaperaccess.com/full/3658597.jpg")] bg-contain'>
            {/* <img src="https://wallpaperaccess.com/full/3658597.jpg" alt="" /> */}
        </Container>
    )
}
const Container = styled.div`
height:100vh;
width:100vw;
img{
    height:100vh;
    width:100vw;
}

`;
export default BackgroundImage
