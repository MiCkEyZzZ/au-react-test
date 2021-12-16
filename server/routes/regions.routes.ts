import { Router }  from 'express'

const router = Router()

import regionsController from '../controllers/regions.controller'

router.get('/', regionsController.getAllRegions)

router.post('/', regionsController.createRegion)

router.put('/', regionsController.updateRegion)

router.get('/:id', regionsController.getOneRegion)

router.delete('/:id', regionsController.deleteRegions)

export default router
