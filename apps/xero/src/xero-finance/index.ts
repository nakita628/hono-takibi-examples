import { OpenAPIHono } from '@hono/zod-openapi'
import { financeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', financeHandler)

export default app
