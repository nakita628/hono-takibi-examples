import { OpenAPIHono } from '@hono/zod-openapi'
import { configHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', configHandler)

export default app
