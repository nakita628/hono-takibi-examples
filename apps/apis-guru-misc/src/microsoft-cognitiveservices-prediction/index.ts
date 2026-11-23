import { OpenAPIHono } from '@hono/zod-openapi'
import { projectIdHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', projectIdHandler)

export default app
