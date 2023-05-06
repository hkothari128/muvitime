import React from 'react'
import styled from 'styled-components'

function BackgroundImage() {
    return (
        <Container>
            <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
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
