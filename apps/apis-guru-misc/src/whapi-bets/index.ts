import { OpenAPIHono } from '@hono/zod-openapi'
import { betsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', betsHandler)

export default app
