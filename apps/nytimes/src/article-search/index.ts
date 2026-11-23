import { OpenAPIHono } from '@hono/zod-openapi'
import { articlesearchJsonHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', articlesearchJsonHandler)

export default app
