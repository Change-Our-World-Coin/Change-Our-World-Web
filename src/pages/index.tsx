import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Icon from '@iconify/react';
import menuIcon from '@iconify/icons-mdi/menu';
import telegram from '@iconify/icons-mdi/telegram';
import twitter from '@iconify/icons-mdi/twitter';
import equalizer from '@iconify/icons-mdi/equalizer';
import medium from '@iconify/icons-mdi/medium';
import contentCopy from '@iconify/icons-mdi/content-copy';

const largeBreak = '1300px';
const mediumBreak = '1200px';
const smallBreak = '800px';
const xsmallBreak = '649px';

const Header = styled.header`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-content: center;
  position: relative;
  background-color: rgb(236, 119, 119);

  .hand {
    width: 100%;
    height: 85%;
    object-fit: contain;
    object-position: bottom;
    position: absolute;
    bottom: 0;
    padding: 0 3em;
  }

  h1 {
    text-transform: uppercase;
    color: #fff;
    font-size: 6vw;
    margin-top: 20vh;
    z-index: 100;
    text-align: center;
    padding: 0 2em;

    @media screen and (max-width: ${mediumBreak}) {
      margin-top: 25vh;
      font-size: 6.5em;
    }

    @media screen and (max-width: ${smallBreak}) {
      font-size: 5.5em;
      padding: 0 1em;
    }

    @media screen and (max-width: ${xsmallBreak}) {
      font-size: 3.25em;
    }
  }
`;

const Logo = styled.a`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 3.5em;
  left: 4em;
  z-index: 999;
  transition: top 250ms;

  &.scroll {
    top: -10em;
  }

  img {
    height: 5.5em;
  }

  @media screen and (max-width: ${smallBreak}) {
    top: 2.5em;
    left: 0;
    right: 0;

    img {
      height: 4em;
    }
  }
`;

const Navigation = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  top: 3em;
  right: 2.5em;
  z-index: 999;
  background-color: transparent;
  transition: background-color 250ms;
  text-align: center;

  @media screen and (max-width: ${smallBreak}) {
    top: 2em;
  }

  &.scroll {
    background-color: #111;
    color: #fff;

    .burger {
      color: #fff;
    }
  }

  .links {
    padding: 2em;
    transition: all 500ms;

    @media screen and (max-width: ${smallBreak}) {
      display: none;
      position: absolute;
      top: -2em;
      bottom: 0;
      left: -40vw;
      min-height: 100vh;
      width: 100vw;
      background-color: #111;
      flex-direction: column;
      padding-top: 8em;
      text-align: left;

      &.open {
        display: flex;
        color: #fff;
      }
    }

    a {
      font-size: 1.25rem;
      font-weight: 700;
      text-transform: uppercase;
      padding: 1.5em;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .burger {
    display: none;
    color: #111;
    padding: 1.5em;

    &.open {
      color: #fff;
    }

    @media screen and (max-width: ${smallBreak}) {
      display: block;
    }
  }
`;

const SloganSection = styled.section`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4em 3em 3em;

  @media screen and (max-width: ${smallBreak}) {
    padding: 4em 3em 2em;
  }

  p {
    font-size: 1.8rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 100;
    justify-self: center;
  }
`;

const VisionSection = styled.section`
  background-color: #eee;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 5em;
  justify-content: center;
  align-items: center;
  padding: 3em 3em 4em;

  @media screen and (max-width: ${mediumBreak}) {
    display: flex;
    flex-direction: column;
    padding: 3em 7em 4em;
  }

  @media screen and (max-width: ${smallBreak}) {
    padding: 3em 3em 4em;
  }

  img {
    grid-column-start: 2;
    grid-column-end: 3;
    height: 17em;

    @media screen and (max-width: ${smallBreak}) {
      height: 12em;
    }
  }

  .description {
    font-size: 1.15rem;
    grid-column-start: 3;
    grid-column-end: 6;

    h2 {
      margin-bottom: 1em;
    }
  }
`;

const HowItWorksSection = styled.section`
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 5em;
  justify-content: center;
  align-items: flex-start;
  padding: 3em 3em 4em;

  @media screen and (max-width: ${largeBreak}) {
    display: flex;
    flex-direction: column;
    padding: 3em 3em 4em;

    .placeholder {
      display: none;
    }
  }

  .description {
    text-align: center;
    font-size: 1.15rem;
    grid-column-start: 2;
    grid-column-end: 6;

    .colored {
      color: #fa5a5a;
    }

    h2 {
      margin-bottom: 1em;
    }

    #tokenAddress {
      font-weight: bold;
      overflow-wrap: anywhere;
      word-wrap: anywhere;
    }

    .tokenAddress {
      margin-top: 2em;

      svg {
        position: relative;
        top: 0.4em;
        margin-left: 0.25em;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

const BuyButton = styled.a`
  background-color: rgb(236, 119, 119);
  padding: 1em 2em;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 2em;
  display: inline-block;
  color: #fff;
  transition: transform 150ms;

  &:hover {
    transform: scale(1.1);
  }
`;

const RoadmapSection = styled.section`
  background-color: rgb(236, 119, 119);
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 5em;
  justify-content: center;
  align-items: center;
  padding: 3em 3em 4em;

  @media screen and (max-width: ${mediumBreak}) {
    display: flex;
    flex-direction: column;
    padding: 4em 7em 4em;
  }

  @media screen and (max-width: ${smallBreak}) {
    padding: 3em 3em 4em;
  }

  .image {
    grid-column-start: 2;
    grid-column-end: 3;
    height: 5em;

    @media screen and (max-width: ${smallBreak}) {
      height: 4em;
    }

    img {
      height: 100%;
    }
  }

  .description {
    font-size: 1.15rem;
    grid-column-start: 3;
    grid-column-end: 6;

    h2 {
      margin-bottom: 1em;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2em 3em;
  background-color: #111;

  @media screen and (max-width: ${mediumBreak}) {
    flex-direction: column-reverse;
    text-align: center;
  }

  a {
    color: rgba(255, 255, 255, 0.7);
    transition: linear color 150ms;

    &:hover {
      color: #fff;
    }
  }

  svg {
    margin: 1.25em;
  }

  .copyright {
    color: #fff;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  border: 2px solid rgb(236, 119, 119);
  background-color: rgba(236, 119, 119, 0.05);
  padding: 3em 2em 3em;
  height: 100%;
  text-transform: uppercase;

  .title {
    margin-top: 0;
    color: #fa5a5a;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;

    @media screen and (max-width: ${smallBreak}) {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: ${largeBreak}) {
    width: 100%;
  }

  &.fees {
    grid-column-start: 2;
    grid-column-end: 4;

    div {
      margin: 1em 0;
      padding: 2em 2em 1em;
    }
  }

  &.initialSupply {
    grid-column-start: 2;
    grid-column-end: 6;

    .title {
      margin-top: 0;
    }

    p {
      margin-bottom: 0;
    }
  }
`;

export default function Home() {
  const [navbarScroll, setNavbarScroll] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const sections = {
    header: useRef(null),
    vision: useRef(null),
    howItWorks: useRef(null),
    token: useRef(null)
  };
  const iconWidth = '1.65em';
  const burgerIconWidth = '2em';

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 120) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const scrollToRef = (event: any, ref: any) => {
    event.preventDefault();
    setBurgerOpen(false);

    if (ref && ref.current) {
      ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  const copyAddress = (event: any) => {
    event.preventDefault();
    const address = document.getElementById('tokenAddress');

    if (address) {
      navigator.clipboard.writeText(address.textContent!);
    }
  };

  return (
    <React.Fragment>
      <Header>
        <Logo href="/" className={navbarScroll ? 'scroll' : ''} data-aos="fade-down">
          <img src="/logo-black.svg" />
        </Logo>
        <Navigation className={navbarScroll ? 'scroll' : ''} data-aos="fade-down">
          <div className={`links ${burgerOpen ? 'open' : ''}`}>
            <a href="" onClick={(e) => scrollToRef(e, sections.vision)}>
              Our vision
            </a>
            <a href="" onClick={(e) => scrollToRef(e, sections.howItWorks)}>
              The token
            </a>
            <a
              href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x6E1b4BA8F5bE7708cD475795FC23924eD078A8d2"
              target="_blank"
            >
              Buy
            </a>
          </div>
          <button className={`burger ${burgerOpen ? 'open' : ''}`} onClick={() => setBurgerOpen(!burgerOpen)}>
            <Icon icon={menuIcon} width={burgerIconWidth} />
          </button>
        </Navigation>
        <img className="hand" src="/hand.png" />
        <h1 className="title" data-aos="fade-down" data-aos-duration="1000">
          Change Our World
        </h1>
      </Header>
      <SloganSection>
        <p>
          Changing Our World for the better by <b>uniting crypto humanitarians</b> on Binance Smart Chain.
        </p>
      </SloganSection>
      <VisionSection ref={sections.vision}>
        <img src="/logo-red.svg" />
        <div className="description">
          <h2>It's time for a change</h2>
          <p>
            We are going to <b>$CHANGE</b> our world. With your help, our community and partners can encourage positive
            action to benefit the lives of vulnerable communities and causes around the world.
            <br />
            <br />
            By turning the concept of charity on its head, everyone can “make it.” Do great things, earn great rewards.
          </p>
        </div>
      </VisionSection>
      <HowItWorksSection ref={sections.howItWorks}>
        <div className="description">
          <h2>The $CHANGE token</h2>
          <p>
            <b>$CHANGE</b> is more than a token. <b>$CHANGE</b> is a movement. We are <b>Changing Our World</b> for the
            better by uniting a diverse community of experienced crypto humanitarians, do-good degens, and blockchain
            beginners on the Binance Smart Chain.
          </p>
          <p className="tokenAddress">
            Our token address: <span id="tokenAddress">0x6E1b4BA8F5bE7708cD475795FC23924eD078A8d2</span>{' '}
            <span onClick={(e) => copyAddress(e)}>
              <Icon icon={contentCopy} width={iconWidth} />
            </span>
          </p>
          <BuyButton
            href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x6E1b4BA8F5bE7708cD475795FC23924eD078A8d2"
            target="_blank"
          >
            Buy on PancakeSwap
          </BuyButton>
        </div>
        <Card className="initialSupply">
          <h3 className="title">1,000,000,000,000,000 $CHANGE</h3>
          <p>Initial supply</p>
        </Card>
        <Card className="fees">
          <h2 className="title">10 %</h2>
          <p>Fee applied to each transaction</p>
          <Card>
            <h2 className="title">9 %</h2>
            <p>Of that goes to the liquidity pool</p>
          </Card>
          <Card>
            <h2 className="title">1 %</h2>
            <p>Of that is redistributed to holders</p>
          </Card>
        </Card>
        <Card>
          <h2 className="title">Donations</h2>
          <h3>50%</h3>
          <p>Of the daily generated liquidity gets donated</p>
        </Card>
        <Card>
          <h2 className="title">Burn & Treasury</h2>
          <p>
            The rest of the daily generated liquidity gets burned and a small part allocated to the staking treasury for
            future developments
          </p>
        </Card>
        <p className="description">
          To foster a tight-knit community and make our donation flow transparent, we will{' '}
          <b>live stream donations and provide links to the transactions</b>.
        </p>
      </HowItWorksSection>
      <RoadmapSection>
        <a href="https://www.binance.charity/" className="image" target="_blank">
          <img src="/binance-charity-logo.svg" />
        </a>
        <div className="description">
          <h2>Dynamic Charitable Giving</h2>
          <p>
            Initially, we are giving to Binance Charity Foundation’s initiatives through their donation platform. We
            chose to take a dynamic approach to select charities because many social causes need assistance.
            <br />
            <br />
            Our most ambitious goal is to have our community donate so much and so quickly that the Binance Charity
            Foundation runs out of social causes to support. At this point, we will then move our focus to external
            charities outside of the Binance Smart Chain ecosystem.
          </p>
        </div>
      </RoadmapSection>
      <Footer>
        <span className="copyright">
          © Copyright {new Date().getFullYear()} <b>Change Our World (CHANGE)</b>. All Rights Reserved.
        </span>
        <div>
          <a href="http://t.me/ChangeOurWorld" target="_blank">
            <Icon icon={telegram} width={iconWidth} />
          </a>
          <a href="https://twitter.com/_Changeourwrld" target="_blank">
            <Icon icon={twitter} width={iconWidth} />
          </a>
          <a href="https://medium.com/@changeourworld" target="_blank">
            <Icon icon={medium} width={iconWidth} />
          </a>
          <a href="https://bscscan.com/address/0x6E1b4BA8F5bE7708cD475795FC23924eD078A8d2" target="_blank">
            <Icon icon={equalizer} width={iconWidth} />
          </a>
        </div>
      </Footer>
    </React.Fragment>
  );
}
