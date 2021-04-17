export default class Post {
  constructor(title, imgUrl, description, upvotes, creatorId) {
    this.title = title
    this.imgUrl = imgUrl
    this.description = description
    this.upvotes = upvotes
    this.creatorId = creatorId
  }

  get Template() {
    return `<div class="col-md-4 col-12">
                <div class="card card-modification">
                    <img src="//placehold.it/200X200" class="card-img-top" alt="...">
                    <div class="card-body">
                          <p class="mb-1 text-center">Post Title</p>
                          <div class="d-flex justify-content-between">
                                <p class="mb-0"><i class="fas fa-arrow-up mr-1"></i>0</p>
                                <p class="mb-0"><i class="far fa-comment mr-1"></i>0</p>
                                <p class="mb-0"><i class="far fa-eye mr-1"></i>0</p>
                          </div>
                        </div>
                </div>
            </div>`
  }
}
