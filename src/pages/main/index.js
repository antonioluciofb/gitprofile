import React, { Component } from "react"
import {AiFillGithub, BsSearch} from "react-icons/all"
import { Container, Header, Menu, ButtonUser, ButtonRepos, ButtonSearch } from "./style"
import { Link } from "react-router-dom"
import "./style.js";

export default class Main extends Component {

    state = {
        username: "",
    }

    handleInputChange = (event) => {
        this.setState({ username: event.target.value })
    }

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
                <input onChange={this.handleInputChange} type="text" placeholder="Nome do Usuário"></input>
                <ButtonSearch>
                <Link to={`/profile/${this.state.username}`}><BsSearch size={24} color="black"/></Link>
                </ButtonSearch>
                </div>

                

                </Menu>

            </Container>

        )

    }

}