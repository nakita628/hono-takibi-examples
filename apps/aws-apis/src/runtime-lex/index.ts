import { OpenAPIHono } from '@hono/zod-openapi'
import { botHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', botHandler)

export default app
