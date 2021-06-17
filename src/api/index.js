import axios from 'axios'
const api = {
  latest () {
    return axios.get('/api/4/news/latest')
  },
  before (time) {
    return axios.get(`/api/4/news/before/${time}`)
  },
  detail (id) {
    return axios.get(`/api/4/news/${id}`)
  }
}
export default api
