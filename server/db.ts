import keys from './keys'
import { ClientConfig, Pool } from 'pg'

const pgRegions: ClientConfig = {
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: 5432
}

const db = new Pool(pgRegions)

export default db
