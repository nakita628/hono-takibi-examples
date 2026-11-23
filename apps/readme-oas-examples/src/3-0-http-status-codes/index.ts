import { OpenAPIHono } from '@hono/zod-openapi'
import { statusHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', statusHandler)

export default app
