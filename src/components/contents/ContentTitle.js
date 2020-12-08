import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.div`
padding: 30px 0 50px 0;
max-width: 550px;
text-align: center;
margin: 0 auto;
`
const ContentTitle =({className,text}) => (
    <Wrapper className={className}>
        <p>{text}</p>
    </Wrapper>
);
ContentTitle.propTypes = {
    text: PropTypes.string.isRequired
}
export default ContentTitle;