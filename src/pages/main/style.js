import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Header = styled.div`

    display: flex;
    margin-top: 3%;
    margin-bottom: 3%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    h2{
        color: #ffffff;
        font-family: 'Cormorant SC', serif;
        font-weight: 400;
        letter-spacing: 10px;
        font-size: 60px;
    }

`

export const Menu = styled.div`
    width: 770px;
    height: 175px;
    background-color: #FFFFFF;
    border-radius: 5px;

    .user {
    display:flex;
    float: left;
    font-family: 'Dosis', sans-serif;
    font-weight: 700;
    font-size: 24px;
    align-items: center;
    justify-content: center;
    border-radius: 5px 0px 0px 0px;
    background-color: #FE4D4D;
    width: 385px;
    height: 42px;

    }

    .repos {
    display:flex;
    float: left;
    font-family: 'Dosis', sans-serif;
    font-weight: 700;
    font-size: 24px;
    align-items: center;
    justify-content: center;
    border-radius: 0px 5px 5px 0px;
    background-color: #4A92FE;
    width: 385px;
    height: 42px;
    }
`
