import { OpenAPIHono } from '@hono/zod-openapi'
import { projectNameHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', projectNameHandler)

export default app
