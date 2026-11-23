import { OpenAPIHono } from '@hono/zod-openapi'
import { dataHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', dataHandler)

export default app
