import axios from 'axios'

export default {
   getIssues() {
    return axios({
      method: 'get',
      url: 'https://arlive.atlassian.net/rest/api/3/search?maxResults=5&jql=project%20%3D%20FDSTEAM%20AND%20resolution%20%3D%20Unresolved%20ORDER%20BY%20priority%20DESC%2C%20updated%20DESC&expand=changelog,names,transitions',
      headers: {
      Authorization: 'Basic user:password'
      }
    })
  }

}
