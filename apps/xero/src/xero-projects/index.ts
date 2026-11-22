import { OpenAPIHono } from '@hono/zod-openapi'
import { projectHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', projectHandler)

export default app
