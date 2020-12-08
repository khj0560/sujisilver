import React from "react";
import Link from "next/link";
import styled from "styled-components";
import MobileHeader from "./MobileHeader";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    min-width: 1200px;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 70px;
    background-color: ${props => props.theme.whiteColor};
    z-index: 10;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 0 #333, 0 1px 5px rgba(0,0,0,0.05);
    @media (max-width: 1240px) {
        min-width: 250px;
    }
 `

const HeaderBox = styled.div`
    width: 80%;
    max-width: 980px;
    @media (max-width: 1240px) {
        width: 100%; 
    }
    &:after {
        content:'';
        display:block;
        clear:both;
    }
 `

const LogoArea = styled.div`
    width:20%;
    background: url('/images/header/logo.png') no-repeat 0 6px;
    background-size: 85%;
    max-width: 250px;
    height: 100%;
    float: left;
    cursor: pointer;
    @media (max-width: 1240px) {
        width:195px;
        margin: 0 10px;
    }   
`

const NavArea = styled.div`
    width: 80%;  
    float: right;
    max-width: 690px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
 `

const List = styled.ul`
    list-style: none;
 `

 const ListItems = styled.li`
      width: 20%;
      text-align: center;
      font-family: 'NotoB';
      font-size: 18px;
      float: left;
`

function Header() {
    return(
        <HeaderWrapper>
            <HeaderBox>
                <Link href="/"><LogoArea ></LogoArea></Link>
                <NavArea>
                    <List>
                        <ListItems><Link href="/intro">센터소개</Link></ListItems>
                        <ListItems><Link href="/daynightcare">주야간보호 안내</Link></ListItems>
                        <ListItems><Link href="/nursinghome">요양원 안내</Link></ListItems>
                        <ListItems><Link href="/visitcare">방문요양 안내</Link></ListItems>
                        <ListItems><Link href="/counsel">상담신청</Link></ListItems>
                    </List>
                </NavArea>
            </HeaderBox>
        </HeaderWrapper>
    )
}

const renderContent = () => {
    const [width, setWidth] = React.useState(0);
    React.useEffect(()=>{
        setWidth(window.innerWidth);
    });
    if(width < 1024) {
        return <MobileHeader />
    }else {
        return <Header />
    }
}

export default renderContent;
