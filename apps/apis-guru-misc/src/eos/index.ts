import { OpenAPIHono } from '@hono/zod-openapi'
import { netHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', netHandler)

export default app
