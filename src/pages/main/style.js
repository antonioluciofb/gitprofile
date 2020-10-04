    import styled from "styled-components"

    export const Container = styled.div `

    @media(max-width: 600px) {

    margin-top: 10%;

    }

    @media(max-width: 1500px) {

    margin-top: 3%;

    }

    margin-top: 6%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `

    export const Header = styled.div `

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

    export const Menu = styled.div `

    @media(max-width: 600px) {

    width: 90%;
    margin-top: 4%;
    height: 140px;

    }

    width: 40.1%;
    height: 175px;
    background-color: #FFFFFF;
    border-radius: 5px;
    font-family: 'Dosis', sans-serif;
    display: flex;
    flex-direction:column;

    .buttons{
    box-shadow: 1px 3px 8px rgba(0,0,0,0.3);
    }

    .search{


    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    transition: all .8s ease-in-out;

    }

    input {

    @media(max-width: 600px) {

    width: 80%;

    }

    align-self: center;
    margin-top: 6%;
    text-align: center;
    width: 45%;
    outline: none;
    border: 1px solid #d5d4d2;
    padding: 8px;
    border-radius: 5px;
    box-shadow: 0px 3px 10px rgba(0,0,0,0.3);
    transition: all .2s ease-in-out;
    }

    input:focus {

    border: 2px solid #4A92FE;

    ::placeholder{
    color: transparent;
    }
    }

    `
    export const ButtonUser = styled.button`

    cursor: pointer;
    border:0;
    outline:0;
    letter-spacing: 4px;
    width: 49.9%;
    height: 42px;
    display:flex;
    float: left;
    font-weight: 500;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    border-radius: 5px 0px 0px 0px;
    background-color: #FE4D4D;
    text-align: center;
    `

    export const ButtonRepos = styled.button `
    cursor: pointer;
    border:0;
    outline:0;
    letter-spacing: 4px;
    width: 49.9%;
    height: 42px;
    display:flex;
    float: right;
    font-weight: 500;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    border-radius: 0px 5px 0px 0px;
    background-color: #4A92FE;
    text-align: center;

    `

    export const ButtonSearch = styled.button`
    border:0;
    outline:0;
    background-color: transparent;
    cursor: pointer;
    margin-top: 6%;
    margin-left: 2%;


    `