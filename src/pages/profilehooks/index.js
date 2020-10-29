import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container, Header, Menu,} from "./style"
import { Scrollbars } from 'react-custom-scrollbars';

import api from "../../api.js"
import "./style.js"

function Profile() {

    let { id } = useParams()

    const [userId, setId] = useState('')
    const [user, setUser] = useState([])
    const [repoData, setData] = useState([])
    const [followers, setFollowers] = useState([])
    const [mostUsed, setMost] = useState('')

    useEffect(()=>{
        function fecthId() {
            setId(id)
        }

        fecthId()
    },[id])

    useEffect(()=> {

        var lang = []

        async function fetchData() {

        function language(props) {

            if (lang.find(type => type.name === props )) {

                    var langIndex = lang.find(type => type.name === props)
                    
                    if(langIndex) { langIndex.quantity += 1 }
            }  
            
            else { lang.push({name: props , quantity: 1}) } 
        }

            const loadUser = await api.get(`/users/${userId}`)
            
            const loadRepo = await api.get(`/users/${userId}/repos`)

            const loadFavo = await api.get(`users/${userId}/followers`)

            setUser(loadUser.data)
            setData(loadRepo.data)
            setFollowers(loadFavo.data)
            await loadRepo.data.map(repo => repo.language == null ? {} : language(repo.language))
            verifiedLang()
        }

        function verifiedLang() {

            var numVerf = 0 
    
            /*eslint-disable */
            //suppress all warnings between comments
            lang.map(repo => {if (repo.quantity > numVerf) {
                numVerf = repo.quantity
                setMost(repo.name)
            }})
            /*eslint-enable */
            
        }
        
        fetchData()
        verifiedLang()
    },[userId])


    return(
        <Container>
        <Header>
        
            <div className="name">{user.name}</div>

                <img alt="UserFoto" src ={user.avatar_url}/>
            
                <a href={user.html_url}>{user.login}</a>

                <p>{user.bio}</p>

        </Header>

    <Menu>

        <div className="repositorys">

            <Scrollbars autoHide>

            <div className="items">

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

        ))}
            </div>
        </Scrollbars>
    </div>

    <div className="followers">

    <Scrollbars autoHide>

    <p className="fol">Followers</p>

    {followers.map(user => (

    <>
    <img onClick={()=>{setId(user.login)}} src={user.avatar_url} alt="foto"></img>
    <p>{user.login}</p>
    </>

    ))}
    </Scrollbars>

    </div>

    </Menu>

    </Container>
    )

}

export default Profile