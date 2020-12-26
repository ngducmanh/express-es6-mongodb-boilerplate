import { version } from '../../package.json'
import { Router } from 'express'
import TestRouter from './TestRouter'

export default ({ config, db }) => {
    let api = Router()

    const testRouter = new TestRouter()
    api.use('/test', testRouter.getRouter())

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        res.json({ version })
    })

    return api
}
