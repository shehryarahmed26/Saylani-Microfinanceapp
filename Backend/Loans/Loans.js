import express  from "express";
export const loanrouter = express.Router()

// pending_blogs_router.get('/', async (req, res) => {
//     const penblogs = await PendingBlogmodel.find()
//     res.json({status: 200, Blogs: penblogs})
// })
// pending_blogs_router.post('/', async (req, res) => {
//    const blog = req.body
//    const blogs = await PendingBlogmodel(blog)
//    blogs.save()
//    res.json({status: 200, blog: blog, message: 'blog Added Successfully'})
// })
// pending_blogs_router.put('/:id', async (req, res) => {
//     const {id} = req.params
//     const updatedblog = req.body
//     const blogs = await PendingBlogmodel.findByIdAndUpdate(id, updatedblog)
//     res.json({staus: 200, message: 'blog updated'})
// })
// pending_blogs_router.delete('/:id', async (req, res) => {
//     const {id} = req.params
//     const Deleteblog = await PendingBlogmodel.findByIdAndDelete(id)
//     res.json({status: 200, Deleteblog, message: 'Blog Deleted Successfully'})
// })