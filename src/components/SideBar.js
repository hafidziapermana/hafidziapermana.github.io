import React from 'react'
import profilepic from '../assets/images/profilepic.jpg'

const SocmedBar = (props) => {
  return (
    <div id="mylinks">
      <ul>
        <li className="nolabel"><a href="https://hafidziapermana.github.io/"><span className="icon page"></span><strong>About me</strong></a></li>
        <li><a rel="noopener" href="http://github.com/hafidziapermana"><span className="icon github"></span><strong>GitHub</strong><br/>My projects</a></li>
        <li><a rel="noopener" href="http://facebook.com/hafidziapermana"><span className="icon facebook"></span><strong>Facebook</strong><br/>Friend me</a></li>
        <li><a rel="noopener" href="http://twitter.com/hafidzzpermana"><span className="icon twitter"></span><strong>Twitter</strong><br/>Follow me</a></li>
        <li><a className="contact" href="mailto:hafidzzpermana09@gmail.com"><span className="icon email"></span><strong>Email</strong><br/>Send me a message</a></li>
      </ul>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <div id="sidebar-glow"></div>
        <div id="header">
          <a id="portrait" href="https://hafidziapermana.github.io/">
            <img alt="profile" className="fix" src={profilepic} />
          </a>

          <div id="title">
            <div className="top"></div>
            <div className="content">
              <span className="tagline">Web Developer</span>
              <h1><a href="https://hafidziapermana.github.io/">Hafidz Ilham Aji<span>Permana</span></a></h1>
            </div>
            <div className="bottom"></div>
          </div>

          <p>Welcome to my personal and professional <span>homepage</span>, my small place on the web to put
          <span>information</span> about me, my <span>contact</span> details, and discuss what I'm working on.</p>

      </div>
    </div>
  )
}

class SideBar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <Header />
        <SocmedBar />
      </div>
      )
  }
}

export default SideBar