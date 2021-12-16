import db from '../db'

class RegionsService {
    async getAll() {
        return await db.query(`SELECT * FROM regions`)
    }

    async getOne(id: string) {
        return await db.query(`SELECT * FROM regions where id = $1`, [id])
    }

    async createOne(name: string, path: string) {
        return await db.query(`INSERT INTO regions (path, name) values($1, $2) RETURNING *`, [path, name])
    }

    async updateOne(id: string, path: string, name: string) {
        return await db.query(`UPDATE regions set path = $1, name = $2 where id = $3 RETURNING *`, [path, name, id])
    }

    async deleteOne(id: string) {
        return await db.query(`DELETE FROM regions where id = $1`, [id])
    }
}

export default new RegionsService()
