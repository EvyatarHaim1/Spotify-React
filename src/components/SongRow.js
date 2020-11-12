import React from 'react';
import styled from 'styled-components';

function SongRow({ track }) {
    return (
        <DIV>
            <img className="songRowAlbum"
                 src={track.album.images[0].url} 
                 alt="" 
                 />
            <div className="songRowInfo">
                <h1> {track.name }</h1>
                <p>{track.artists.map((artist) => artist.name).join(",")}
                   {track.album.name}</p>
            </div>
        </DIV>
    )
}

export default SongRow;

const DIV = styled.div`
margin-left: 20px;
padding: 20px;
display: flex;
align-items: center;
z-index: 100;
color: white;
:hover {
    cursor: pointer;
    background-color: black;
    opacity: 0.8;
}
.songRowAlbum {
    height: 40px;
    width: 40px;
}
.songRowInfo { 
    margin-left: 20px;
}
.songRowInfo > h1 { font-size: 16px;}
.songRowInfo > p { 
    font-size: 14px;
    margin-top: 3px;
    color: gray;
    }`

