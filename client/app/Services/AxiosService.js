const base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

export const api = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 3000,
  withCredentials: true
})
