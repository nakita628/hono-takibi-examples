import { OpenAPIHono } from '@hono/zod-openapi'
import { toolresultsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', toolresultsHandler)

export default app
