import { OpenAPIHono } from '@hono/zod-openapi'
import { connectionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', connectionsHandler)

export default app
