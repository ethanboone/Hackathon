import { ProxyState } from '../AppState.js'
import Post from '../Models/Post.js'
import { api } from './AxiosService.js'

class PostsService {

  async getPosts() {
    let res = await api.get('api/posts')
    ProxyState.posts = res.data.map(p => new Post(p))
  }
  async addPost(newPost) {
    let res = await api.post('api/posts/', newPost)
    const post = new Post(res.data)
    console.log(res.data)
    ProxyState.posts = [...ProxyState.posts, post]
  }

  async upvote(id) {
    let post = ProxyState.posts.find(p => p.id == id)
    console.log(post)
    post.upvotes++
    let res = await api.put(`/api/posts/${post.id}`, post)
    let index = ProxyState.posts.findIndex(p => p.id == id)
    // instead of using splice, alternatively we could get all posts (which includes the edited post) and map those results to proxystate.posts
    ProxyState.posts.splice(index, 1, new Post(res.data))
    ProxyState.posts = ProxyState.posts
  }

  async delete(id) {
    let res = await api.delete(`api/posts/` + id)
    ProxyState.posts = ProxyState.posts.filter(p => p.id !== id)
  }
}

export const postsService = new PostsService()
