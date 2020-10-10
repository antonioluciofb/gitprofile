import React, { Component } from "react"
import api from "../../api.js"
import { Container, Header, Menu} from "./style"

import "./style.js"

export default class Profile extends Component {

    state = {
        user: "",
        repoData: [],
        followers: [],
        repository: 0,
        language: [{name:"",
                    quantity:0}],
        mostUsed: "",
    }

    async componentDidMount() {

            this.loadGit()

    }

        async loadGit() {

            var { id } = this.props.match.params
            
            const loadUser = await api.get(`/users/${id}`)

            const loadRepo = await api.get(`/users/${id}/repos`)

            const loadFavo = await api.get(`users/${id}/followers`)

            const { ...infoUser } = loadUser.data

            this.setState({user: infoUser, repoData: loadRepo.data, followers: loadFavo.data })

            loadRepo.data.map(repo => repo.language == null ? {} :this.language(repo.language))

            this.verifiedLang()
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

    verifiedLang = () => {

        const languages = this.state.language
        var numVerf = 0 

        languages.map(repo => {if (repo.quantity > numVerf) {
            numVerf = repo.quantity
            this.setState({mostUsed: repo.name})
        }})
        
    }

    
    render() {

        const {user, repoData, mostUsed, followers } = this.state

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

                <p>Repositorys: {repoData.length}</p> 

                <p>Favority Language in Git: {mostUsed}</p>

                {repoData.map(repos => (
                            
                            repos.language !== null &&

                            <a key={repos.id} href={repos.html_url} className="repo">

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

                <div className="followers">
                    
                    <p className="fol">Followers</p>

                    {followers.map(user => (

                            <a href ={`/profile/${user.login}`}>
                            <img src={user.avatar_url} alt="foto"></img>
                            <p>{user.login}</p>
                            </a>

                    ))}
                                       
                </div>

            </Menu>

        </Container>
                
            )

        }

    }
