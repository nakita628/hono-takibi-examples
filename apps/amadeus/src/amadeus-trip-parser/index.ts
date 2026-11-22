import { OpenAPIHono } from '@hono/zod-openapi'
import { tripHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', tripHandler)

export default app
