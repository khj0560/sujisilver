import { css } from "styled-components";

export const TopTitle = css`
    padding: 100px 0 50px 0;
    text-align: center;
    color: ${props => props.theme.darkGrayColor};
    & h3 {
        font-family: 'TB';
    }
    @media(max-width: 768px) {
        padding: 80px 0 30px 0;
    }
    @media(max-width: 768px) {
        padding: 50px 0 20px 0;
    }
`
export const Div = css`
    width: ${props => props.width ? props.width : "100%" };
    text-align: center;
    margin: 0 auto;
    padding : ${props => props.padding ? "15px 0 15px 0" : "0"};
    color : ${props => props.textColor ? props.theme.pointColor : props.theme.darkGrayColor};
    ${props => {
        if(props.flex){
            return (
                `display: flex;
                justify-content: center;`
            )}
    }}
    & h5 {
        font-family: "TB" !important;
    }
    @media(max-width: 768px) {
        width: 100%;
    }
`
export const Space = css`
    margin: 0 0 50px 0;
`
export const TitleDiv = css`
    width: 40px;
    height: 35px;
    background-color: ${props => props.pointColor ? props.theme.pointColor : props.theme.darkGrayColor};
    color: ${props => props.theme.whiteColor};
    margin: 0 15px;
    font-family: "TB" !important;
`
export const TableDiv = css`
    width: 100%;
    display: flex;
    justify-content: center;
    & > table {
        display: table;
        table-layout: fixed;
        width: 100%;
        max-width: 1024px;
        border-collapse:collapse;
        border:1px solid ${props => props.theme.lightGrayColor};
        text-align: center;
        margin: 20px 0 40px 0;
        word-break: keep-all;
        font-size: 1rem;
            & > thead > tr {
            background-color: ${props => props.theme.darkGrayColor};  
            color: ${props => props.theme.whiteColor};
            & > th, td {
                border: 1px solid ${props => props.theme.lightGrayColor};
                padding: 10px 0; 
                vertical-align: middle;
            }
        }
        & > tbody > tr {
            & > th {
                background-color: #f0f0f0;  
                border: 1px solid ${props => props.theme.lightGrayColor};
                vertical-align: middle;
            }
            & td {
                border: 1px solid ${props => props.theme.lightGrayColor};
                padding: 10px 0; 
                vertical-align: middle;
            }
        }
        @media(max-width: 768px) {
            width: 728px;
        }
    }
    @media(max-width: 768px) {
        justify-content: left;
        overflow-x: scroll;
    }

`
export const SmallP = css`
    color: ${props => props.theme.mediumGrayColor};
    /* font-size: 16px;
    @media(max-width: 480px) {
        font-size: 14px;
    } */
`

