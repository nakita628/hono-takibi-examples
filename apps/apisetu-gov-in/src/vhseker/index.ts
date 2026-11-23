import { OpenAPIHono } from '@hono/zod-openapi'
import { vochseHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', vochseHandler)

export default app
