import React from 'react'

import SideBar from './SideBar'
import Content from './Content'

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <SideBar />
        <Content />
      </div>
      )
  }
}

export default App