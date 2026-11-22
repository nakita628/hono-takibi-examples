import { OpenAPIHono } from '@hono/zod-openapi'
import { publishHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', publishHandler)

export default app
