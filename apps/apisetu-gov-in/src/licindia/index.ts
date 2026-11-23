import { OpenAPIHono } from '@hono/zod-openapi'
import { podocHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', podocHandler)

export default app
