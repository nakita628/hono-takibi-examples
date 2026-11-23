import { OpenAPIHono } from '@hono/zod-openapi'
import { __rootHandler, datasetHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', __rootHandler).route('/', datasetHandler)

export default app
