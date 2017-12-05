import React from 'react'

const Content = (props) => {
  return (
    <div className="wrapper">
      <div className="post text">
        <span className="post-type"></span>
        <h1><a id="anchor-about" href="">About Me</a></h1>
        <p>I am a Web Developer, JavaScript enthusiast. Currently living in Jakarta.</p>
        <p>I previously lived in Yogyakarta and Semarang, worked at local town photo agency for about 18 months as a Photojournalist. Before that I lived in Pacitan, my hometown and before that I lived in Surabaya.</p>
        <p>For my current adventure, I am focused on learning in JavaScript.</p>
        <p>If that's interesting to you, please reach out to me. <a href="https://twitter.com/hafidzzpermana">follow me on Twitter</a></p>
      </div>
      {/*here*/}
    </div>

  )
}

export default Content