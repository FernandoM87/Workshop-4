const mongoose = require('mongoose');
const { Schema, model } = mongoose; // mongoose.Schema & mongoose.model

const blogSchema = new Schema({
  title: String,
  tags: [String],
  comments: [{
    user: String,
    content: String,
    votes: Number
  }]
});

const Blog = model('Blog', blogSchema);

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-demo-2");


    console.log("Done!");
}

async function createBlogPost(){

    const blogPost = new Blog({
        title: "Blogpost 2",
        tags: ["tag1", "tag2"],
        comments : [
            {
                user: "Diego",
                content: "content 2",
                votes: 3
            }
        ]
    });

    await blogPost.save();

}

async function updateBlogPost(){
    const blogPost = await Blog.findById("64500222359cbd6cb8c9e428");

    blogPost.comments.push({
        user: "Mia",
        content: "content 3",
        votes: 10
    });

    await blogPost.save();
}

async function deleteOne(){
    await Blog.findOneAndDelete({_id:"6450e8f72e573a2edfd286f7"});
}