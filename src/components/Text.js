import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const TextBox = styled.div`
    & h5 {
        color: ${props => props.color ? props.theme.pointColor : props.theme.darkGrayColor}
    }
    & > p {
        color : ${props => props.theme.darkGrayColor}
    } 
`

const Text = ({className, title, titleColor, text}) => {
    return(
        <TextBox 
            className={className}
            color={titleColor}
        >
            <h5>{title}</h5>
            {text.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
        </TextBox>
    )
}

Text.propTypes = {
    title: PropTypes.string,
    titleColor: PropTypes.string,
    text: PropTypes.arrayOf(PropTypes.string)
}

export default Text;