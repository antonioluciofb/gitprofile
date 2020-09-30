import React, { Component } from "react"
import {AiFillGithub} from "react-icons/all"
import { Container, Header, Menu } from "./style"
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
                    
                    <div>
                    <div className="user">User</div>
                    <div className="repos">Repos</div>
                    </div>
                    <input></input>

                </Menu>

            </Container>

        )

    }

}