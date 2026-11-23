import { OpenAPIHono } from '@hono/zod-openapi'
import { petHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', petHandler)

export default app
