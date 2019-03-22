import React from 'react'
import './App.css'
import Header from './components/Header'
import JiraIssues from './components/JiraIssues'

const App : React.FunctionComponent<{}> = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <JiraIssues />
    </div>
  )
}

export default App
