import { OpenAPIHono } from '@hono/zod-openapi'
import { tokenHandler, webResourceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', tokenHandler).route('/', webResourceHandler)

export default app
