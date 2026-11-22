import { OpenAPIHono } from '@hono/zod-openapi'
import { usersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', usersHandler)

export default app
