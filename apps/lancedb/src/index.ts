import { OpenAPIHono } from '@hono/zod-openapi'
import { dataHandler, tablesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', tablesHandler).route('/', dataHandler)

export default app
