import { OpenAPIHono } from '@hono/zod-openapi'
import { companiesHandler, dataHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', companiesHandler).route('/', dataHandler)

export default app
