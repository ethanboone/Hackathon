import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {
    async find(query = {}) {
        let data = await dbContext.Comments.find(query)
        return data
    }

    async getOne(id) {
        const post = await dbContext.Comments.findOne({ _id: id })
        if (!post) {
            throw new BadRequest('Invalid Id')
        }
        return post
    }

    async create(body) {
        return await dbContext.Comments.create(body)
    }

    async edit(body) {
        let data = await dbContext.Comments.findOneAndUpdate({ _id: body.id }, body, { new: true })
        if (!data) {
            throw new BadRequest('Invalid Id')
        }
        return data
    }

    async delete(id) {
        let data = await dbContext.Comments.findOneAndDelete({ _id: id })
        if (!data) {
            throw new BadRequest('Invalid Id')
        }
        return "Successfully Deleted"
    }
}

export const commentsService = new CommentsService()
