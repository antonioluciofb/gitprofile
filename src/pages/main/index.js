import React, { Component } from "react"
import {AiFillGithub, BsSearch} from "react-icons/all"
import { Container, Header, Menu, ButtonUser, ButtonRepos, ButtonSearch } from "./style"
import "./style.js";
import api from "../../api.js"

export default class Main extends Component {

    state = {
        name: "",
    }

    handleInputChange = (event) => {
        this.setState({ name: event.target.value })
    }

    // handleSend = () => {
    //     alert(this.state.name)
    // }

   
     handleSend =  async () => {

        const response = await api.get(`/users/${this.state.name}`)

        console.log(response.data.bio)


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
                <BsSearch size={24} color="black" onClick={this.handleSend} />
                </ButtonSearch>
                </div>

                

                </Menu>

            </Container>

        )

    }

}