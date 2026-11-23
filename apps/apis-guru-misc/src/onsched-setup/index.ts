import { OpenAPIHono } from '@hono/zod-openapi'
import { setupHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', setupHandler)

export default app
