import React from 'react'

import styled from 'styled-components';

function Logo() {
    return (
        <Container >
            <img className='w-[10em] h-[2em] md:w-[20em] md:h-[4em]' src="./logo.svg" alt="" />
        </Container>
    )
}
const Container = styled.div``;



export default Logo
