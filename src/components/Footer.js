import React from 'react';
import styled from 'styled-components';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid, Slider} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <FOOTER>
            <FooterLeft>
              <img 
              className="footer-album-logo"
              src="https://img.discogs.com/cWKhsLVyilx3dHfufhQJPEQuecs=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2072712-1557768542-8030.jpeg.jpg" 
              alt="albumImg" 
              />
              <div className="footerSongInfo">
                  <h4>Yeah!</h4>
                  <p>Usher</p>
              </div>
            </FooterLeft>

            <FooterCenter>
                <ShuffleIcon className="footerGreen" />
                <SkipPreviousIcon className="footerIcon" />
                <PlayCircleOutlineIcon fontSize="large" className="footerIcon" />
                <SkipNextIcon className="footerIcon" />
                <RepeatIcon className="footerGreen" />
            </FooterCenter>

            <FooterRight>
              <Grid container spacing={2}>
                  <Grid item>
                      <PlaylistPlayIcon />
                  </Grid>
                  <Grid item>
                      <VolumeDownIcon />
                  </Grid>
                  <Grid item xs>
                      <Slider />
                  </Grid>
              </Grid>
            </FooterRight>
        </FOOTER>
    )
}

export default Footer;

const FOOTER = styled.div`
display: flex;
justify-content: space-between;
position: fixed;
bottom: 0;
height: 65px;
width: 97%;
background-color: #282828;
padding: 20px;`

const FooterLeft = styled.div`
flex: 0.3;
display: flex;
align-items: center;
color: white;
width: 300px;
.footer-album-logo {
    height: 60px;
    width: 60px;
    margin-right: 20px;
    object-fit: contain;
}
.footerSongInfo > h4 {margin-bottom: 5px;}
.footerSongInfo > p {font-size: 12px;}
`
const FooterCenter = styled.div`
flex: 0.4;
padding: 0 100px;
color: white;
display: flex;
align-items: center;
justify-content: space-between;
max-width: 300px;
.footerGreen {color: green;}
.footerIcon:hover, 
.footerGreen:hover  {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2) !important;
}`

const FooterRight = styled.div`
flex: 0.3;
display:flex;
justify-content: space-between;
align-items: center;
color: white;
* .MuiSlider-root{ color: green;}`