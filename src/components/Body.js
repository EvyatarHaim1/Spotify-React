import React from 'react';
import styled from 'styled-components';
import Header from './Header'
import {useDataLayerValue} from '../store/DataLayer';

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

const BodySongs = styled.div``