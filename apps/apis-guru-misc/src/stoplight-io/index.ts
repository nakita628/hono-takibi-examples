import { OpenAPIHono } from '@hono/zod-openapi'
import { versionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', versionsHandler)

export default app
