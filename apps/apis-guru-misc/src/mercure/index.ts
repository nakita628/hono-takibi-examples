import { OpenAPIHono } from '@hono/zod-openapi'
import { wellKnownHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', wellKnownHandler)

export default app
