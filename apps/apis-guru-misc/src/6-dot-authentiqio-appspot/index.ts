import { OpenAPIHono } from '@hono/zod-openapi'
import { keyHandler, loginHandler, scopeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', keyHandler).route('/', loginHandler).route('/', scopeHandler)

export default app
