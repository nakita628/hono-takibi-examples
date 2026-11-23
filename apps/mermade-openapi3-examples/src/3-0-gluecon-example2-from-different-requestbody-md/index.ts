import { OpenAPIHono } from '@hono/zod-openapi'
import { opinionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', opinionsHandler)

export default app
