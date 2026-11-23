import { OpenAPIHono } from '@hono/zod-openapi'
import { apisHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apisHandler)

export default app
