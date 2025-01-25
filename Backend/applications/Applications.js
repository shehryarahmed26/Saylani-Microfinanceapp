import express, { application }  from "express";
export const router = express.Router()

router.get('/', async (req, res) => {
    const getapplications = await applicationmodel.find()
    console.log(getapplications);
    res.json({status: 200, Applications: getapplications})
})
router.get('/:id', async (req, res) => {
    const {id} = req.params
    const getapplication = await applicationmodel.findById(id)
    console.log(getblogs);
    res.json({status: 200, Blogs: getblogs})
})
router.post('/', async (req, res) => {
   const application = req.body
   const applications = await applicationmodel(blog)
   applications.save()
   res.json({status: 200, application, message: 'blog Added Successfully'})
})
router.put('/:id', async (req, res) => {
    const {id} = req.params
    const updatedapplication = req.body
    const Applications = await applicationmodel.findByIdAndUpdate(id, updatedapplication)
    res.json({staus: 200, message: 'blog updated'})
})
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    const Deleteapplication = await applicationmodel.findByIdAndDelete(id)
    res.json({status: 200, Deleteblog, message: 'Application Deleted Successfully'})
})