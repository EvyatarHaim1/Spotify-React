import React from 'react';
import styled from 'styled-components';
import {loginUrl} from '../../spotify';
//  const animation = "https://i.pinimg.com/originals/27/6f/27/276f273d11f8b9dbc0a9c55bb38ea8c6.gif";

function Login() {
    return (
        <LOGIN>
          <img 
            src="https://services.tegrazone.com/sites/default/files/pcgame-featured-image/Spotify-MFG-840x360.jpg" 
            alt="spotify-logo" />
          <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </LOGIN>
    )
}

export default Login

const LOGIN = styled.div`
display: grid;
place-items: center;
height: 100vh;
background-color: black;
img { 
    width: 100%;
    object-fit: contain;
    height: 500px;
}
a { 
    padding: 20px;
    border-radius: 99px;
    background-color: #1db954;
    font-weight: 800;
    color: white;
    text-decoration: none;
  }`