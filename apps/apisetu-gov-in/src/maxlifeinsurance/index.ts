import { OpenAPIHono } from '@hono/zod-openapi'
import { licerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', licerHandler)

export default app
