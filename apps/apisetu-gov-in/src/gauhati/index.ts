import { OpenAPIHono } from '@hono/zod-openapi'
import { socerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', socerHandler)

export default app
