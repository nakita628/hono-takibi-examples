import { OpenAPIHono } from '@hono/zod-openapi'
import { appsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', appsHandler)

export default app
