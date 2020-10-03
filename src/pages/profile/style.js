import styled from "styled-components"

export const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;

    img{
        width: 170px;
        border-radius: 50%;
    }

`

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;

    .name{
        margin-top: 15px;
        color: #ffffff;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: 700;
    }

    .status{
        width: 300px;
        height: 30px;
        margin-top: 10px;
        border: 2px solid #ffffff;
        border-radius: 10px;
    }

`

