import { Request, Response } from 'express'
import RegionsService from '../services/regions.service'

class RegionsController {
    // метод для получения всех регионов
    async getAllRegions(req: Request, res: Response) {
        try {
            const regions = await RegionsService.getAll()

            await res.status(200).json(regions.rows)
        } catch (err) {
            console.log(err)
        }
    }

    // метод для получения одного региона
    async getOneRegion(req: Request, res: Response) {
        try {
            const { id } = req.params
            const region = await RegionsService.getOne(id)

            if (!region) {
                return new Error(`Region with this ID ${ id } not found`)
            }

            await res.status(200).json(region.rows[0])
        } catch (err) {
            console.log(err)
        }
    }

    // метод для создания региона
    async createRegion(req: Request, res: Response) {
        try {
            const { name, path } = req.body

            const region = await RegionsService.createOne(name, path)

            await res.status(200).json(region)
        } catch(err) {
            console.log(err)
        }
    }

    // метод для обновления региона
    async updateRegion(req: Request, res: Response) {
        try {
            const { id, path, name } = req.body

            const region = await RegionsService.updateOne(id, path, name)

            await res.status(200).json({
                status: 'success',
                children: region.rows[0]
            })
        } catch(err) {
            console.log(err)
        }
    }

    // метод для удаления региона
    async deleteRegions(req: Request, res: Response) {
        try {
            const { id } = req.params

            const region = await RegionsService.deleteOne(id)

            await res.status(200).json(region.rows[0])
        } catch(err) {
            console.log(err)
        }
    }
}

export default new RegionsController()
