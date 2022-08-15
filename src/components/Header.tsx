import React, { useEffect, useState } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Container } from "@mui/material";

const HeaderWrapper = styled.div`
  box-shadow: var(--shadow);
  & > * {
    padding: 20px 0;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > div:last-child {
        div {
          cursor: pointer;
          &:first-child {
            margin-right: 20px;
            span {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
`;
export const Header: React.FC<{}> = () => {
  const [theme, setTheme] = useState<any>(
    localStorage.getItem("theme") === null
      ? "light"
      : localStorage.getItem("theme")
  );

  localStorage.setItem("theme", theme);
  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderWrapper>
      <Container>
        <div>
          <div>
            <span>LOGO</span>
          </div>
          <div>
            <div onClick={changeTheme}>
              {theme === "light" ? (
                <>
                  <FontAwesomeIcon icon={faSun} />
                  <span>Light Theme</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faMoon} />
                  <span>Dark Theme</span>
                </>
              )}
            </div>
            <div>User Icon</div>
          </div>
        </div>
      </Container>
    </HeaderWrapper>
  );
};
