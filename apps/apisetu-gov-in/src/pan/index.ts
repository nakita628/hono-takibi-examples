import { OpenAPIHono } from '@hono/zod-openapi'
import { pancrHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', pancrHandler)

export default app
