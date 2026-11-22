import { OpenAPIHono } from '@hono/zod-openapi'
import { scopePublicHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', scopePublicHandler)

export default app
