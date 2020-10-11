    import styled from "styled-components"

    export const Container = styled.div `

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    color: #ffffff;

    img{
    width: 170px;
    border-radius: 50%;
    }

    `

    export const Header = styled.div `
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

    p {

    margin-top: 10px;
    font-family: 'Work Sans', sans-serif;
    font-size: 20px;
    }
    `

    export const Menu = styled.div `

    width: 95%;
    height: 700px;
    margin-top: -20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;


    .repositorys {

    width: 60%;
    height: 600px;
    background-color: #ffffff;
    padding-top: 10px;
    border-radius: 10px;
    margin-right: 3%;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* overflow-x: hidden;
    overflow-y: scroll; */

    .items {
    display: flex;
    align-items: center;
    flex-direction: column;

    p {

    margin-top: 10px;
    font-family: 'Work Sans', sans-serif;
    font-size: 20px;
    color: black;
    margin-top: 5px;
    margin-bottom: 15px;

    }


    .repo {

    text-decoration: none;
    color: #ffffff;
    width: 80%;
    height: 200px;
    background-color: #151515;
    margin-top: 10px;
    margin-bottom: 10px; 
    padding: 20px;
    opacity: 90%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;


    .name{

    font-size: 20px;
    font-family: 'Work Sans', sans-serif;

    }

    .description{

    margin-top: 4%;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;

    }

    .lang{

    margin-top: 5%;
    text-align: center;


    }

    }

    }

    }

    .followers {

    margin-left: 3%;
    width: 25%;
    height: 600px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    text-align: center;
    color: black;
    font-family: 'Work Sans', sans-serif;

    a{
    text-decoration: none;
    color: black;
    }

    .fol{ 
    margin-top: 20px;
    font-size: 20px;
    font-family: 'Work Sans', sans-serif;
    }

    img{
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    }

    }

    `