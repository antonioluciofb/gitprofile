import React, { Component } from "react"
import api from "../../api.js"
import { Container, Header } from "./style"


import "./style.js"

export default class Profile extends Component {

    state = {
        user: "",
    }

    async componentDidMount() {

            this.loadGit()

    }

        async loadGit() {

            const { id } = this.props.match.params

            const loadUser = await api.get(`/users/${id}`)

            const { ...infoUser } = loadUser.data

            this.setState({user: infoUser})

        }

    render() {

        const {user} = this.state

        return(
            
        <Container>

            <Header>

                <img src ={user.avatar_url}/>

            </Header>

        </Container>
                
            )

        }

    }
