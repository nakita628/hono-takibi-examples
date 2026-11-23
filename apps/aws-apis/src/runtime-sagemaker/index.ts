import { OpenAPIHono } from '@hono/zod-openapi'
import { endpointsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', endpointsHandler)

export default app
