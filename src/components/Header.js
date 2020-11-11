import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar} from  '@material-ui/core';
import {useDataLayerValue} from '../store/DataLayer';

function Header() {

    const [{user}, dispatch] = useDataLayerValue()
    return (
        <HEADER>
            <HeaderLeft>
                <SearchIcon />
                <input
                   placeholder="Search for artists, Songs"
                   type="text"
                />
            </HeaderLeft>

            <HeaderRight>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
               <h4>{user?.display_name}</h4>
            </HeaderRight>

        </HEADER>
    )
}

export default Header;

const HEADER = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 30px;`

const HeaderLeft = styled.div`
flex: 0.5;
min-width: 70px;
background-color: white;
color: gray;
border-radius: 30px;
padding: 10px;
display: flex;
align-items: center;
input {
    border: none;
    width: 100%;
    }`

const HeaderRight = styled.div`
display: flex;
align-items: center;
h4 { margin-left: 10px;}`
