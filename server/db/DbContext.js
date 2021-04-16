import mongoose from 'mongoose'
import UserSchema from '../models/User'
import AccountSchema from '../models/Account'
import PostSchema from "../models/Post"
import CommentSchema from "../models/Comment"

class DbContext {
  User = mongoose.model('User', UserSchema);
  Account = mongoose.model('Account', AccountSchema);
  Posts = mongoose.model('Post', PostSchema);
  Comments = mongoose.model('Comment', CommentSchema)
}

export const dbContext = new DbContext()
