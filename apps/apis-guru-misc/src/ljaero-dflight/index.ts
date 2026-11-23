import { OpenAPIHono } from '@hono/zod-openapi'
import { usHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', usHandler)

export default app
