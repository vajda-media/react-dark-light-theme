import React from 'react'
import { string } from 'prop-types';
import styled from 'styled-components';

const LogoContainer = styled.div`
    position: absolute;
`;

const LogoWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 10px;
    display: flex;
    justify-content: center;
    width: 100%;
`;



const Logo = ({ theme }) => {
  const isLight = theme === 'light';

  return (
    <LogoWrapper>
        <LogoContainer>
            <img src={isLight ? 'images/dk-logo-dark.png' : 'images/dk-logo-white.png'} alt="dk-logo" width="120px" />
        </LogoContainer>
    </LogoWrapper>
  );
};

Logo.propTypes = {
  theme: string.isRequired,
}

export default Logo;