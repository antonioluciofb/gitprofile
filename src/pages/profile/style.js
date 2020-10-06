import styled from "styled-components"

export const Container = styled.div`

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

export const Menu = styled.div `
    
    width: 90%;
    height: 400px;
    margin-top: 50px;
    border-radius: 5px;
    background-color: rgba(255,255,255,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .title {
        margin-bottom: 20px;
        font-family: 'Work Sans', sans-serif;

    }

    .content {
    
    background-color: rgba(255,255,255);
    opacity: 85%;
    width: 100%;
    height: 300px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: scroll;
    overflow-y: hidden;

        .repositorys {

            width: 360px;
            height: 250px;
            background-color: rgba(27,36,44,0.9);
            margin-left: 2%;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
            padding: 5px;

                .name{font-family: 'Work Sans', sans-serif; font-size: 16px;}

                .description{

                    margin-top: 20%;
                    word-wrap: break-word;
                    width: 100%;
                    height: 70%;
                    font-family: 'Work Sans', sans-serif; 
                    /* background-color: #FFFFFF; */
                    
                    }

        }

    }

`

export const Buttom = styled.button`

                    cursor: pointer;
                    font-family: 'Work Sans', sans-serif; 
                    color: #FFFFFF;
                    font-size: 11px;
                    border:0;
                    border-radius: 5px;
                    outline:0;
                    background-color: rgba(45,127,108,1);
                    width: 100px;
                    height: 20px;

`