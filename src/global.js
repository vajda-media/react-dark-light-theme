import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100vh;
  }

  body {
    height: 100vh;
    min-height: 900px;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    argin: 0 50px;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  .toggle-theme-text {
    position: absolute;
    top: 35px;
    right: 105px;
    font-size: 12px;
  }

  .dk-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 100px;
  }

  .dk-logos {
    flex-grow: 0.1;
    width: 100%;
    margin: 30px 0px 30px 0px;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.text === '#FAFAFA' ? 'rgba(226, 226, 226, 0.4)' : 'rgba(150, 153, 156, 0.4)'};
    cursor: pointer;
  }

  .dk-partner-logos {
    height: 32px;
    margin: 0 10px;
    cursor: pointer;
  }

  .dk-logos-grid-first {
    > a:not(:last-child) {
      margin-right: 30px;
    }
  }

  .dk-logos-grid-second {
    a {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      margin: 0 16px;
    }

    > a:not(:last-child) {
      margin-left: 15%;
    }

    > a:last-child {
      margin-right: 15%;
    }

    img {
      width: 100%;
      padding: 30px
    }
    margin-top: -5px!important;
  }

  .dk-logos-grid-third {
    margin: 35px 105px 20px!important;
    padding: 5px 0!important;
  }

  .dk-title {
    h1 {
      font-size: 27px;
    }

    p {
      font-size: 16px;
    }

    text-align: center;
  }

  small {
    display: block;
  }

  button {
    display: block;
  }

  a {
    flex-grow: 0.1;
    color: ${({ theme }) => theme.text};
  }

  @media all and (max-width: 1079px) {
    .dk-logos {
      width: 230px;
    }

    .dk-partner-logos {
      height: 26px;
      margin: 10px 5px;
    }

    .dk-logos-inner-grid {
      padding: 0!important;
    }

    .dk-logos-grid-second {
      > a:not(:last-child) {
        margin-left: 0;
      }
  
      > a:last-child {
        margin-right: 0;
      }

      img {
        width: 300px;
        padding: 20px
      }
    }
  }

  @media all and (max-width: 869px) {
    .toggle-theme-text {
      display: none;
    }

    .dk-container {
      margin: 0px 30px;
    }

    .dk-logos {
      width: 300px;
    }

    .dk-logos-grid-first {
      > a:not(:last-child) {
        margin-right: 0;
      }

      position: relative;
      top: 15px!important;
    }

    .dk-logos-grid {
      flex-direction: column;
      align-content: center;
    }

    .dk-logos-grid-second {
      a {
        margin: 0;
      }

      margin-top: 15px!important;
    }

    .dk-logos-grid-third {
      position: relative;
      top: 35px;
      margin: 0 auto 120px!important;
    }

    .dk-logos-inner-grid {
      flex-direction: column;
      height: auto!important;
      margin: 0!important;
      flex-flow: row wrap;
    }

    .dk-logos-grid-bt {
      top: -19px!important;
      left: 0!important;
      padding-left: 0!important;
      margin: auto!important;
      text-align: center;
    }

    .dk-partner-logos {
      height: 45px;
      margin: 30px;
    }

    .dk-title {
      h1 {
        font-size: 21px;
      }
  
      p {
        font-size: 14px;
      }

      margin-top: 30px;
    }
  }
`;
