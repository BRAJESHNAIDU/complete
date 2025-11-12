import experss from 'express'
import { createBlog, deleteBlog, getAllBlogs, searchBlog, updateBlog } from '../controllers/blogController.js'
const router=experss.Router()

router.post('/create',createBlog)
router.get('/getall',getAllBlogs)
router.put('/update/:id',updateBlog)
router.delete('/delete/:id',deleteBlog)
router.get('/search',searchBlog)

export default router
