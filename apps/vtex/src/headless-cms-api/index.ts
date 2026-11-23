import { OpenAPIHono } from '@hono/zod-openapi'
import { vHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', vHandler)

export default app
