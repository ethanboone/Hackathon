export default class Post {
  constructor({ title, imgUrl, description, upvotes, creatorId, _id }) {
    this.title = title
    this.imgUrl = imgUrl
    this.description = description
    this.upvotes = upvotes
    this.creatorId = creatorId
    this.id = _id
  }

  get Template() {
    return `<div class="col-md-4 col-12">
                <div class="card card-modification">
                    <img src="${this.imgUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                          <p class="mb-1 text-center">${this.title}</p>
                          <p class="mb-1 text-center">${this.description}</p>
                          <div class="d-flex justify-content-between">
                                <button onclick="app.postsController.upvote('${this.id}')" data-toggle="modal" data-target="#commentModal" class="btn"><p class="mb-0"><i class="fas fa-arrow-up mr-1"></i>${this.upvotes}</p></button>
                                <button class="btn"><p class="mb-0"><i class="far fa-comment mr-1"></i>0</p></button>
                                <button class="btn text-danger" onclick="app.postsController.delete('${this.id}')"><p>Delete</p></button>
                          </div>
                        </div>
                </div>
            </div>`
  }
}
