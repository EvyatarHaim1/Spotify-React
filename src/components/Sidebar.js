import React from 'react';
import styled from 'styled-components';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from '../store/DataLayer';

function Sidebar() {

   const [{playlists}, dispatch] = useDataLayerValue();

    return (
        <SIDEBAR>
           <img src="https://services.tegrazone.com/sites/default/files/pcgame-featured-image/Spotify-MFG-840x360.jpg"
                alt="logo"
           />
           <SidebarOption title="Home" Icon= {HomeIcon}/>
           <SidebarOption title="Search" Icon={SearchIcon}/>
           <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>

           <br />
           <strong className="sidebarTitle">PLAYLISTS</strong>
           <hr />
           
           {playlists?.items?.map(playlist => (
               <SidebarOption title={playlist.name} />
           ))}
          
        </SIDEBAR>
    )
}

export default Sidebar;

const SIDEBAR = styled.div`
height: 100vh;
flex: 0.2;
color: white;
min-width: 230px;
height: 100vh;
padding-left: 10px;
padding-right: 10px;
background-color: #040404;
hr {
    border: 1px solid #282828;
    width: 90%;
    margin: 10px auto;
    }
.sidebarTitle {
  margin-left: 10px;
  padding: 5px;
  font-size: 12px;
}

img {
    height: 70px;
    padding: 10px;
    margin-right: auto;
}`
