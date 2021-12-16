import { Router } from 'express'

const router = Router()

import regionsRoutes from './regions.routes'

router.use('/regions', regionsRoutes)

export default router
