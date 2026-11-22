import { OpenAPIHono } from '@hono/zod-openapi'
import { scopeInternalHandler, scopePublicHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', scopeInternalHandler).route('/', scopePublicHandler)

export default app
