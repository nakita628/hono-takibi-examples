import { OpenAPIHono } from '@hono/zod-openapi'
import { busHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', busHandler)

export default app
