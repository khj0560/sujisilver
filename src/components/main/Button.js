import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Link from "next/link";

const ButtonWrapper = styled.div`
    /* padding: 0 30px;

    @media(max-width: 350px) {
        padding: 0 10px;
    } */
    & button {
        background: none;
        border: 2px solid ${props => props.theme.pointColor};
        border-radius: 50px;
        color: ${props => props.theme.pointColor};
        display: block;
        font-family: 'notoB';
        margin: 50px auto;
        width: 400px;
        padding: 25px 50px;
        position: relative;
        cursor: pointer;

        @media(max-width: 768px) {
            width: 100%;
            padding: 17px 30px;
            border: 0;
            color: ${props => props.theme.whiteColor};
            background-color: ${props => props.theme.pointColor};
        }
        &:hover{
            -webkit-transition:0.5s all ease;
            transition:0.5s all ease;
            color: ${props => props.theme.whiteColor};
            background-color: ${props => props.theme.pointColor};
        }
    }
`

const Button = ({type,text,to,bg,color}) => (
    <ButtonWrapper>
        <Link href={to}>
            <button><h4>{text}</h4></button>
        </Link>
    </ButtonWrapper>
);

Button.propTypes = {
    type: PropTypes.string,
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bg: PropTypes.string,
    color: PropTypes.string
};

export default Button;