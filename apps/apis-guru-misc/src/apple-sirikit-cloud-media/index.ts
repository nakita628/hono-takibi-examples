import { OpenAPIHono } from '@hono/zod-openapi'
import { configHandler, intentHandler, queuesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', configHandler).route('/', intentHandler).route('/', queuesHandler)

export default app
