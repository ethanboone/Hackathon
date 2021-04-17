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
    _draw()
  }

  addPost() {
    window.event.preventDefault()
    const form = window.event.target
    const newPost = {
      title: form.title.value,
      imgUrl: form.imgUrl.value,
      description: form.description.value
    }
    postsService.addPost(newPost)

    form.reset()
    // TODO -----------------------------------------
    document.getElementById('new-post-form').modal('hide')
  }
}
