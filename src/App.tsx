import React from 'react'
import './App.css'
import Header from './components/Header'
// import JiraIssues from './components/JiraIssues'
import Dashboard from './components/Dashboard'

const App : React.FunctionComponent<{}> = () => {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  )
}

export default App
