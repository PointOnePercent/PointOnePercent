import React, { Component } from 'react'
import './styles/css/App.css'
import Wrapper from './components/Wrapper'
import Header from './components/Header';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'

export default class App extends Component {
  render() {
    return (
      <Wrapper type='main'>
        <Header />
        <Wrapper type='nav'>
          <Nav />
        </Wrapper>
        <Wrapper type='middle'>
          <ContentWrapper />
          <Wrapper type='sidebar' />
        </Wrapper>
        <Wrapper type='footer' />
      </Wrapper>
    )
  }
}