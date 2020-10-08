import React, { Component } from "react"
import api from "../../api.js"
import { Container, Header, Menu} from "./style"

import "./style.js"

export default class Profile extends Component {

    state = {
        user: "",
        repoData: [],
        repository: 0,
        language: [{name:"",
                    quantity:0}],
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

    language = (language) => {

        var lang = this.state.language

        if (lang.find(type => type.name === language )) {

                var langIndex = lang.find(type => type.name === language)
                
                if(langIndex) {

                langIndex.quantity += 1 
                
                }

        }  
        
        else {

            lang.push({name: language , quantity: 1})

        }

    }
    
    
    render() {

        const {user, repoData, language} = this.state
        
        repoData.map(repo => this.language(repo.language) )

        console.log(language)

        return(
            
        <Container>

            <Header>
            
                <div className="name">{user.name}</div>

                    <a href={`https://www.twitter.com/${user.twitter_username}`}><img alt="" src ={user.avatar_url}/></a>
                
                    <a href={user.html_url}> {user.login}</a>

                    <p>{user.bio}</p>

            </Header>

            <Menu>
                
                <div className="repositorys">

                <p>Repositorios: {repoData.length}</p>

                {repoData.map(repos => (
                            
                            repos.language !== null &&

                            <a href={repos.html_url} className="repo">

                            <div className="name">{(repos.name).toUpperCase()}</div>

                            {repos.description === null
                            
                            ? <div className="description">A little project with {repos.language}</div>
                        
                            : <div className="description">{repos.description}</div>
                            
                            }

                            <div className="lang">{repos.language}</div>

                            </a>
                            
                                        )   

                )}

                </div>

                <div className="followers"></div>

            </Menu>

        </Container>
                
            )

        }

    }
