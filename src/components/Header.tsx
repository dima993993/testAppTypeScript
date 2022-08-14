import React, { useEffect, useState } from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components'


const HeaderWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 20px;
&>div:last-child {
    display: flex;
    &>div:first-child {
        margin-right: 20px;
        cursor: pointer;
        span {
            margin-left: 10px;
        }
    }
}
`;
export const Header: React.FC<{}> = () => {
    const [theme, setTheme] = useState('light');

    const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <HeaderWrapper>
            <div>
                <span>LOGO</span>
            </div>
            <div>
                <div onClick={changeTheme}>
                    {theme === 'light' ? <><FontAwesomeIcon icon={faSun}/><span>Light Theme</span></> : <><FontAwesomeIcon icon={faMoon}/><span>Dark Theme</span></>}
                </div>
                <div>User Icon</div>
            </div>
        </HeaderWrapper>
    );
};
