import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import SongRow from './SongRow';
import {useDataLayerValue} from '../store/DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Body({ spotify }) {

    const [{ discover_weekly }, dispatch] = useDataLayerValue()

    return (
        <BODY>
          <Header spotify={spotify}/>
            <div className="bodyInfo">
                <img 
                src={discover_weekly?.images[0].url}
                alt={discover_weekly?.images[1].url} />
                <div className="bodyInfoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <BodySongs>
               <BodyIcons>
                  <PlayCircleFilledIcon className="bodyShuffle"/>
                  <FavoriteIcon fontSize="large"/>
                  <MoreHorizIcon />
               </BodyIcons>
               {discover_weekly?.tracks.items.map(item => (
                   <SongRow track={item.track} />
               ))}
            </BodySongs>
        </BODY>
    )
}

export default Body;

const BODY = styled.div`
flex: 0.8;
background: linear-gradient(transparent, rgba(0,0,0,1)) rgb(91, 87, 115);
height: 100vh;
color: white;
padding: 30px;
overflow-y: overlay;
.bodyInfo {
    display: flex;
    align-items: flex-end;
    padding : 10px;
    img{
        height: 20vw;
        margin: 0 20px;
        box-shadow: 0 4px 60px 
        rgba( 0, 0, 0, 0.5);
    }
    .bodyInfoText {
        flex: 1;
        h2{ 
            font-size: 48px;
            margin-bottom: 10px;
        }
        p{
            font-size: 14px;
        }
    }
}`

const BodySongs = styled.div`
margin: 20px -30px;
`

const BodyIcons = styled.div`
display: flex;
align-items: center;
.MuiSvgIcon-root {
    margin-right: 20px; 
}
.bodyShuffle {
    font-size: 80px !important; 
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.bodyShuffle:hover {
    transition: 100ms transform ease-in;
    transform: scale(1.08);
}`