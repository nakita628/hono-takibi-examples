import { OpenAPIHono } from '@hono/zod-openapi'
import { discoveryHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', discoveryHandler)

export default app
