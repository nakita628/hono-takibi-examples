import { OpenAPIHono } from '@hono/zod-openapi'
import { apIsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apIsHandler)

export default app
