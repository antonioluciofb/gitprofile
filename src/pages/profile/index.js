import React, { Component } from "react"
import api from "../../api.js"
import { Container, Header, Menu } from "./style"
import { AiOutlineTwitter, AiOutlineBook, RiGitRepositoryCommitsLine } from "react-icons/all"


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

                    <img alt="" src ={user.avatar_url}/>
                
                    <a href={user.html_url}> {user.login}</a>

                <div className="status">

                <a href={"https://twitter.com/" + user.twitter_username} className="iconsBar">
                    <AiOutlineTwitter size={24}/>
                </a>

                <a href={user.blog} className="iconsBar">
                    <AiOutlineBook size={24}/>
                </a>

                <RiGitRepositoryCommitsLine className="iconsBar" size={24}/> {repoData.length}

                </div>

            </Header>

            <Menu>
                

            </Menu>

        </Container>
                
            )

        }

    }
