import { OpenAPIHono } from '@hono/zod-openapi'
import { deploymentsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', deploymentsHandler)

export default app
