import React, { Component } from "react"
import api from "../../api.js"
import { Container, Header, Menu} from "./style"
import { Link } from "react-router-dom"

import "./style.js"

export default class Profile extends Component {

    state = {
        user: "",
        repoData: [],
        repository: 0,
    }

    async componentDidMount() {

            this.loadGit()

    }

        async loadGit() {

            var { id } = this.props.match.params
            
            const loadUser = await api.get(`/users/${id}`)

            const loadRepo = await api.get(`/users/${id}/repos`)

            const { ...infoUser } = loadUser.data

            this.setState({user: infoUser, repoData: loadRepo.data })

        }

    render() {

        const {user, repoData} = this.state


        return(
            
        <Container>

            <Header>
            
                <div className="name">{user.name}</div>

                    <a href={`https://www.twitter.com/${user.twitter_username}`}><img alt="" src ={user.avatar_url}/></a>
                
                    <a href={user.html_url}> {user.login}</a>

            </Header>

            <Menu>
                
                <div className="repositorys">

                {repoData.map(repos => (
                            
                            <a href={repos.html_url} className="repo">

                            <div className="name">{(repos.name).toUpperCase()}</div>

                            <div className="description">{repos.description}</div>

                            <div className="lang">{repos.language}</div>

                            </a>


)   

                )
                
                }

                </div>

                <div className="followers"></div>

            </Menu>

        </Container>
                
            )

        }

    }
