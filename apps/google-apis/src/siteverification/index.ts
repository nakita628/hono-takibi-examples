import { OpenAPIHono } from '@hono/zod-openapi'
import { webResourceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', webResourceHandler)

export default app
