import React from 'react';
import styled from 'styled-components';

function Body() {
    return (
        <BODY>
           <h1>I'm the body</h1> 
        </BODY>
    )
}

export default Body;

const BODY = styled.div`
flex: 0.8;
background: linear-gradient(transparent, rgba(0,0,0,1)) rgb(91, 87, 115);
height: 100vh;
color: white;
padding: 30px;`