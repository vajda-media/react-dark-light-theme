import React from 'react'
import { string } from 'prop-types';
import styled from 'styled-components';

const GridContainer = styled.div`
    position: relative;
    display: flex;
`;

const GridContainerPartners = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 90px;
    padding: 30px 0;
    border: 1px solid ${({ theme }) => theme.text === '#FAFAFA' ? 'rgba(226, 226, 226, 0.4)' : 'rgba(150, 153, 156, 0.4)'};
`;

const GridContainerPartnersBT = styled.div`
    position: relative;
    top: -15px;
    left: 50%;
    width: 130px;
    height: 20px;
    padding-left: 38px;
    margin-left: -62px;
    font-weight: 400;
    color: ${({ theme }) => theme.text === '#FAFAFA' ? 'rgba(226, 226, 226, 0.8)' : 'rgba(150, 153, 156, 0.8)'};
    background: ${({ theme }) => theme.text === '#FAFAFA' ? '#363537' : '#fff'};
`;

const GridContainerPartnersWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0;
    width: 100%;
    height: 70px;
`;

const GridContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 80px 0 0;
    font-family: 'Poppins', sans-serif;
`;

const Grid = ({ theme }) => {

    const isLight = theme === 'light';

    const changeImage = (e) => {
        const element = e.target;
        const cls = e.target.classList;
        switch (true) {
            case cls.contains('dk-partner-logos-falano'):
                element.src = isLight ? 'images/partner/Falano_dark.png' : 'images/partner/Falano_light.png';
                break;
            case cls.contains('dk-partner-logos-muench'):
                element.src = 'images/partner/muench_solutions-consulting.png';
                break;
            case cls.contains('dk-partner-logos-schranz'):
                element.src = isLight ? 'images/partner/schranz-control-dark.png' : 'images/partner/schranz-control-light.png';
                break;
            case cls.contains('dk-partner-logos-cim'):
                element.src = 'images/partner/concept-image-media.png';
                break;
            case cls.contains('dk-partner-logos-ph'):
                element.src = isLight ? 'images/partner/Peter-henkel-dark.png' : 'images/partner/Peter-henkel-light.png';
                break;
            case cls.contains('dk-partner-logos-ffd'):
                element.src = isLight ? 'images/partner/fab-films_dark.png' : 'images/partner/fab-films_light.png';
                break;
            case cls.contains('dk-partner-logos-vm'):
                element.src = isLight ? 'images/partner/vajda-media-dark.png' : 'images/partner/vajda-media-light.png';
                break;
            default:
                break;
        }
    }

    const changeImageBack = (e) => {
        const element = e.target;
        const cls = e.target.classList;
        switch (true) {
            case cls.contains('dk-partner-logos-falano'):
                element.src = 'images/partner/Falano_grau.png';
                break;
            case cls.contains('dk-partner-logos-muench'):
                element.src = 'images/partner/muench_solutions-consulting-grau.png';
                break;
            case cls.contains('dk-partner-logos-schranz'):
                element.src = 'images/partner/schranz-control-grau.png';
                break;
            case cls.contains('dk-partner-logos-cim'):
                element.src = 'images/partner/concept-image-media-grey.png';
                break;
            case cls.contains('dk-partner-logos-ph'):
                element.src = 'images/partner/Peter-henkel-grau.png';
                break;
            case cls.contains('dk-partner-logos-ffd'):
                element.src = 'images/partner/fab-films_grau.png';
                break;
            case cls.contains('dk-partner-logos-vm'):
                element.src = 'images/partner/vajda-media-grau.png';
                break;
            default:
                break;
        }
    }

    return (
        <div className="dk-container">
            <GridContainerTitle className="dk-title">
                <h1>DK Gruppe ist ein Unternehmensverband mehrere Unternehmen und Kooperationspartner.</h1>
                <p>In den Bereichen Gesundheitsförderung, Marketing und Digitalisierung, werden gemeinsam Projekte geplant, gesteuert und verwirklicht. Sie werden unterstützt von der Verwaltungsgesellschaft Daniel Keim Vermietung &amp; Verpachtung welche für die einzelnen Unternehmen tätig ist aber auch eigenständige Projekte unter anderem in der Bau- und Immobilienbranche pflegt und umsetzt.</p>
            </GridContainerTitle>
            <GridContainer className="dk-logos-grid dk-logos-grid-first">
                <a href="https://danielkeim.de/" target="_blank" rel="noopener noreferrer"><img className="dk-logos" src={isLight ? 'images/dk-consulting-dark.png' : 'images/dk-consulting-light.png'} alt="dk-logo" /></a>
                <a href="https://gesundheitdeluxe.de/" target="_blank" rel="noopener noreferrer"><img className="dk-logos" src={isLight ? 'images/gesundheitstraining-deluxe-dark.png' : 'images/gesundheitstraining-deluxe-light.png'} alt="dk-logo" /></a>
                <a href="https://gesundheitssportdeluxe.de/" target="_blank" rel="noopener noreferrer"><img className="dk-logos" src={isLight ? 'images/Gesundheitssport_Deluxe_EV_dark.png' : 'images/Gesundheitssport_Deluxe_EV_light.png'} alt="dk-logo" /></a>
            </GridContainer>
            <GridContainer className="dk-logos-grid dk-logos-grid-second">
                <a href="https://shop.deluxefitness.de/" target="_blank" rel="noopener noreferrer"><img className="dk-logos" src={isLight ? 'images/deluxe-fitness-proteine-dark.png' : 'images/deluxe-fitness-proteine-light.png'} alt="dk-logo" /></a>
                <a href="http://dk-vv.de/" target="_blank" rel="noopener noreferrer"><img className="dk-logos" src={isLight ? 'images/Daniel_Keim_vermietung-verpachtung-dark.png' : 'images/Daniel_Keim_vermietung-verpachtung-light.png'} alt="dk-logo" /></a>
            </GridContainer>
            <GridContainerPartners className="dk-logos-grid dk-logos-grid-third">
                <GridContainerPartnersBT className="dk-logos-grid-bt">Partner</GridContainerPartnersBT>
                <GridContainerPartnersWrapper className="dk-logos-inner-grid">
                    <a href="https://www.falano.de/" target="_blank" rel="noopener noreferrer"><img className="dk-partner-logos dk-partner-logos-falano" src="images/partner/Falano_grau.png" onMouseOver={changeImage} onMouseLeave={changeImageBack} alt="DK Partner Falano" /></a>
                    <a href="https://hans-muench.com/" target="_blank" rel="noopener noreferrer"><img className="dk-partner-logos dk-partner-logos-muench" src="images/partner/muench_solutions-consulting-grau.png" onMouseOver={changeImage} onMouseLeave={changeImageBack} alt="DK Partner Muench" /></a>
                    <a href="https://schranz-control.de/" target="_blank" rel="noopener noreferrer"><img className="dk-partner-logos dk-partner-logos-schranz" src="images/partner/schranz-control-grau.png" onMouseOver={changeImage} onMouseLeave={changeImageBack} alt="DK Partner Schranz Control" /></a>
                    <a href="http://concept-image.de/" target="_blank" rel="noopener noreferrer"><img className="dk-partner-logos dk-partner-logos-cim" src="images/partner/concept-image-media-grey.png" onMouseOver={changeImage} onMouseLeave={changeImageBack} alt="DK Partner Image Media" /></a>
                    <a href="https://peterkenkel.de/" target="_blank" rel="noopener noreferrer"><img className="dk-partner-logos dk-partner-logos-ph" src="images/partner/Peter-henkel-grau.png" onMouseOver={changeImage} onMouseLeave={changeImageBack} alt="DK Partner Peter Henkel" /></a>
                    <a href="https://fab-films.com/" target="_blank" rel="noopener noreferrer"><img className="dk-partner-logos dk-partner-logos-ffd" src="images/partner/fab-films_grau.png" onMouseOver={changeImage} onMouseLeave={changeImageBack} alt="DK Fab Films" /></a>
                    <a href="https://vajda.co.uk/" target="_blank" rel="noopener noreferrer"><img className="dk-partner-logos dk-partner-logos-vm" src="images/partner/vajda-media-grau.png" onMouseOver={changeImage} onMouseLeave={changeImageBack} alt="DK Vajda Media" /></a>
                </GridContainerPartnersWrapper>
            </GridContainerPartners>
        </div>
    );
};

Grid.propTypes = {
  theme: string.isRequired,
}

export default Grid;