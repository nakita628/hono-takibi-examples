import { OpenAPIHono } from '@hono/zod-openapi'
import { ratcrHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ratcrHandler)

export default app
