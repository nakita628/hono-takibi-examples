import { OpenAPIHono } from '@hono/zod-openapi'
import { userIdHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', userIdHandler)

export default app
