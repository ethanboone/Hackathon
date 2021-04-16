import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { postsService } from '../services/PostsService'

export class PostsController extends BaseController {
    constructor() {
        super('api/posts')
        this.router
            .get('', this.getAll)
            .get('/:id', this.getOne)
            // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.create)
            .put('/:id', this.edit)
            .delete('/:id', this.delete)
    }

    async getAll(req, res, next) {
        try {
            let data = await postsService.find(req.query)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        try {
            let data = await postsService.getOne(req.query)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
            req.body.creatorId = req.userInfo.id
            let data = await postsService.create(req.body)
            return res.send(req.body)
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await postsService.edit(req.body)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            let data = await postsService.delete(req.params.id)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
}
