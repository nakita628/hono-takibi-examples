import { OpenAPIHono } from '@hono/zod-openapi'
import { documentsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', documentsHandler)

export default app
