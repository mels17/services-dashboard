import React, { Component } from 'react'
import JiraApi from '../api/JiraApi'
import axios from 'axios'

interface JiraIssuesState {
  jiraIssues: any,
  error: boolean
}

class JiraIssues extends Component<{}, JiraIssuesState> {
  constructor(props: any) {
    super(props)
    this.state = {
      jiraIssues: null,
      error: false    
    }
  }

  public componentDidMount() {
    this.getJiraIssues()
  }

  private async getJiraIssues() {
    const issues = JiraApi.getIssues()
                          .then(response => this.setState({ jiraIssues: response.data.maxResults }))
                          .catch(error => this.setState({ error: true }))
  }

  render() {
    return(
      <div>
        { this.state.jiraIssues }
      </div>
    )
  }
}

export default JiraIssues