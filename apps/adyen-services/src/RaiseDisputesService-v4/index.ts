import { OpenAPIHono } from '@hono/zod-openapi'
import { disputesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', disputesHandler)

export default app
