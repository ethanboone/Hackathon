import { ProxyState } from '../AppState.js'
import Post from '../Models/Post.js'

class PostsService {
  addPost(newPost) {
    const post = new Post(newPost.title, newPost.imgUrl, newPost.description)
    ProxyState.posts = [...ProxyState.posts, post]
  }
}

export const postsService = new PostsService()
