import { OpenAPIHono } from '@hono/zod-openapi'
import { mbusHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', mbusHandler)

export default app
