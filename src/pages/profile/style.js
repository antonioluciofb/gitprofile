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
        margin-bottom: 10px;
        color: #ffffff;
        font-family: 'Work Sans', sans-serif;
        font-weight: 700;
    }

    a {
        margin-top: 10px;
        font-family: 'Work Sans', sans-serif;
        text-decoration: none;
        color: #ffffff;
    }

    .status{
        padding: 5px;
        width: 300px;
        height: 40px;
        margin-top: 10px;
        border: 2px solid #ffffff;
        border-radius: 10px;
    }

    .iconsBar {
        margin-left: 3%;
        color: #ffffff;
    }

`

