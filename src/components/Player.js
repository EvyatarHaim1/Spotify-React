import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

function Player({ spotify }) {
    return (
        <PLAYER>
           <PlayerBody>
            <Sidebar />
             <Body />
           </PlayerBody>
             <Footer />
        </PLAYER>
    )
}

export default Player;

const PLAYER = styled.div``

const PlayerBody = styled.div`
display: flex;`
