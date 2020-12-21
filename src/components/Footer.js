import React from "react";
import Link from "next/link";
import styled from "styled-components";

const FooterStyle = styled.div`
    width: 100%; 
    font-size: 0.8em;
    & > div:nth-child(1) {
        z-index:1;
        width: 100%;
        background-color: ${props => props.theme.lightGrayColor};
        padding: 0 30px;
        & > div {
            background-color: ${props => props.theme.lightGrayColor};
            color: ${props => props.theme.darkGrayColor};
            padding: 20px 0;
            max-width: 1024px;
            margin: 0 auto;
            border: none;
            display: flex;  
            justify-content: center;
            & > h3 {
                font-family: 'TB';
                @media(max-width: 480px) {
                    font-size: 1rem;
                }
            }
        }
    }
    & > div:nth-child(2) {
        width: 100%;
        background-color: ${props => props.theme.darkGrayColor};
        border-bottom: 1px solid ${props => props.theme.mediumGrayColor};
        padding: 0 30px;
        & > ul {
            padding: 10px 0;
            max-width: 1024px;
            margin: 0 auto;
            border: none;
            list-style: none;
            & > li {
                float: left;
                padding: 0 20px 0 0;
                color: ${props => props.theme.mediumGrayColor};
                & > a {
                    color: ${props => props.theme.whiteColor};
                }
            }
            :after {
            content: '';
            display: block;
            clear: both;
            }
        }
    }   
    & > div:last-child {
        background-color: ${props => props.theme.darkGrayColor};
        padding: 20px 30px;;
        & > div {
            max-width: 1024px;
            margin: 0 auto;
            & > ul {
                color: ${props => props.theme.lightGrayColor};
                border: none;
                list-style: none;
                & > li {
                    float: left;
                    padding: 0 20px 0 0;
                }
                :after {
                content: '';
                display: block;
                clear: both;
                }
            } 
        }
    }
`
const LogoArea = styled.div`
    width: 200px;
    height: 60px;
    background: url('/images/footer/footer_logo.png') no-repeat -15px 0;
    background-size: 100%;
`

const Footer = () => {
    return (
        <FooterStyle>
            <div>
                <div>
                    <h3>전화문의 &nbsp;&nbsp; 031-272-0047</h3>
                </div>
            </div>
            <div>
                <ul>
                    <li><Link href="/">개인정보취급방침</Link></li>
                    <li>|</li>
                    <li><Link href="/">이메일무단수집거부</Link></li>
                </ul>
            </div>
            <div>
                <div>
                    <LogoArea />
                    <ul>
                        <li>용인시 수지구 신봉2로 73-2 아트프라자 304호</li>
                        <li>사업자등록번호: 110-80-22322</li>
                        <li>대표자: 고미경</li>
                        <li>문의: 031-272-0047</li>
                    </ul>
                </div>    
            </div>
        </FooterStyle>
    )
}

export default Footer;