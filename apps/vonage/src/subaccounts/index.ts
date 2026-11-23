import { OpenAPIHono } from '@hono/zod-openapi'
import { apiKeyHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiKeyHandler)

export default app
