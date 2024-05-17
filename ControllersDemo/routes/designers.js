import express from "express"

import {AllDesigners,NewDesigner,UpdateDesignerInfo,DeleteDesignerProfile } from '../controllers/designer.js'

const router = express.Router()

router.get('/all',AllDesigners)
router.post('/create',NewDesigner)
router.put('/update',UpdateDesignerInfo)
router.delete('/delete',DeleteDesignerProfile)


export default router

