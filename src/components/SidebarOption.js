import { Icon } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

function SidebarOption({ title, Icon}) {
    return (
        <Div>
            {Icon && <Icon className="sidebarOptionIcon" />}
            {Icon ? (<h4>{title}</h4>) : <p>{title}</p>}
        </Div>
    )
}

export default SidebarOption;

const Div = styled.div`
display: flex;
align-items:center;
color: gray;
height: 40px;
cursor: pointer;
transition: 200ms color ease-in;
:hover {
   color: white;
}
.sidebarOptionIcon {
    padding-left:10px;
    padding-right:10px;
}
 p{
    margin-top: 10px;
    margin-left: 10px;
    font-size:14px;
}`

