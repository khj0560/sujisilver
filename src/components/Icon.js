import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const IconImg = styled.div`
width: ${props => props.width || "200px"};
height: ${props => props.height || "200px"};
border-radius: 10px;
background-image: url(${props => props.image});
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
`

const Icon = ({className, width, height, image}) => (
    <IconImg
        className = {className}
        width = {width}
        height = {height}
        image = {image}
    ></IconImg>
)

Icon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    image: PropTypes.string.isRequired
};

export default Icon;