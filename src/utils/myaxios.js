import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: 'https://qb.jtrchina.com/api/', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // headers: {
  //   'Conten-type': 'multiper/form-data'
  // },
  timeout: 30000 // request timeout
})


export default service