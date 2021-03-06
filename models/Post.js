// title,body,author,tags,thumbnail,readTime,likes,dislikes,comments

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = require("./User")
const Comment = require("./Comment")

const postSchema = new Schema({
    title : {
        type : String ,
        required : true ,
        trim : true ,
        maxlength : 1000
    },
    body : {
        type : String,
        required : true,
        maxlength : 500000000
    },
    author :{
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    tags : {
        type : [String],
        required : true
    },
    thumbnail : String,
    readTime : String , 
    likes : [{
        type : Schema.Types.ObjectId,
        ref : 'User'
    }],
    dislikes : [{
        type : Schema.Types.ObjectId,
        ref : 'User'
    }],
    comments : [
        {
            type : Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ]

},{timestamps: true})

postSchema.index({
    title : 'text',
    body:'text' ,
    tag : 'text' 
},{
    weights : {
        title : 5 ,
        tags : 5,
        body : 2
    }
}
)

const Post = mongoose.model("Post",postSchema)

module.exports = Post
