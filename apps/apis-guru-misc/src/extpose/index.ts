import { OpenAPIHono } from '@hono/zod-openapi'
import { userHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', userHandler)

export default app
