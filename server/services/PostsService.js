import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PostsService {
    async find(query = {}) {
        let data = await dbContext.Posts.find(query)
        return data
    }

    async getOne(id) {
        const post = await dbContext.Posts.findOne({ _id: id })
        if (!post) {
            throw new BadRequest('Invalid Id')
        }
        return post
    }

    async create(body) {
        return await dbContext.Posts.create(body)
    }

    async edit(body) {
        let data = await dbContext.Posts.findOneAndUpdate({ _id: body.id }, body, { new: true })
        if (!data) {
            throw new BadRequest('Invalid Id')
        }
        console.log(data)
        return data
    }

    async delete(id) {
        let data = await dbContext.Posts.findOneAndDelete({ _id: id })
        if (!data) {
            throw new BadRequest('Invalid Id')
        }
        return "Successfully Deleted"
    }
}

export const postsService = new PostsService()
