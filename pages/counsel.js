import styled from 'styled-components';

const TempWrapper = styled.div`
    width: 100%;
    height: 1000px;
    position: fixed;
    left: 0;
    background-color: ${props => props.theme.whiteColor};
    margin: 0 auto;
    text-align: center;
    padding: 50px;
    & > h4 {
        font-family: 'TB'
    }
`

const Intro = () =>{
    return(
        <TempWrapper>
            <h4>준비중입니다</h4>
            <p>빠른 시일 내로 준비하겠습니다:)</p>
        </TempWrapper>
    )
}

export default Intro;