import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'

// Private
function _draw() {
  const posts = ProxyState.posts
  let template = ''

  posts.forEach(post => {
    template += post.Template
  })

  document.getElementById('posts').innerHTML = template
}

// Public
export default class PostsController {
  constructor() {
    ProxyState.on('posts', _draw)

    this.getPosts()
  }

  async getPosts() {
    try {
      await postsService.getPosts()
    } catch (error) {
      console.error(error)
    }
  }

  async addPost() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      const newPost = {
        title: form.title.value,
        imgUrl: form.imgUrl.value,
        description: form.description.value,
        upvotes: 0
      }
      await postsService.addPost(newPost)
      form.reset()
      $('#new-post-form').modal('hide')
    } catch (error) {
      console.error(error)
    }
  }

  async upvote(id) {
    try {
      await postsService.upvote(id)
    } catch (error) {
      console.error(error)
    }
  }

  async delete(id) {
    try {
      await postsService.delete(id)
    } catch (error) {
      console.error(error)
    }
  }
}
