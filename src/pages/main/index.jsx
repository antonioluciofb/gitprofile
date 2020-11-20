import React, { Component } from "react";
import { AiFillGithub, BsSearch } from "react-icons/all";
import {
  Container,
  Header,
  Menu,
  ButtonUser,
  ButtonRepos,
  ButtonSearch,
} from "./style";
import { Redirect } from "react-router-dom";
import "./style.js";

export default class Main extends Component {
  state = {
    username: "",
    redirect: false,
  };

  handleInputChange = (event) => {
    this.setState({ username: event.target.value });
  };

  onKeyPress = (e) => {
    if (e.which === 13 && this.state.username !== "") {
      this.setState({ redirect: true });
    }
  };

  Redirect = () => {
    if (this.state.username !== "") {
      this.setState({ redirect: true });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/profilehooks/${this.state.username}`} />;
    }

    return (
      <Container>
        <Header>
          <AiFillGithub size={180} color="#FFFFFF" />
          <h2>Profile</h2>
        </Header>

        <Menu>
          <div className="buttons">
            <ButtonUser type="button">User</ButtonUser>

            <ButtonRepos type="button">Repos</ButtonRepos>
          </div>

          <div className="search">
            <input
              onKeyPress={this.onKeyPress}
              onChange={this.handleInputChange}
              type="text"
              placeholder="Nome do Usuário"
            ></input>

            <ButtonSearch onClick={() => this.Redirect()}>
              <BsSearch size={24} color="black" />
            </ButtonSearch>
          </div>
        </Menu>
      </Container>
    );
  }
}
