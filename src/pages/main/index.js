import React, { Component } from "react"
import {AiFillGithub, BsSearch} from "react-icons/all"
import { Container, Header, Menu, ButtonUser, ButtonRepos, ButtonSearch } from "./style"
import "./style.js";


export default class Main extends Component {

    render(){
        
        return(
            
            <Container>

                <Header>

                <AiFillGithub size={180} color="#FFFFFF"/>
                <h2>Profile</h2>
                </Header>

                <Menu>
                    
                <div className="buttons">

                <ButtonUser type="button">User</ButtonUser>

                <ButtonRepos type="button">Repos</ButtonRepos>

                </div>
                
                
                <div className="search"> 
                <input type="text" placeholder="Nome do Usuário"></input>
                <ButtonSearch>
                <BsSearch size={24} color="black"/>
                </ButtonSearch>
                </div>

                

                </Menu>

            </Container>

        )

    }

}