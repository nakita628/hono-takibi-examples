import { OpenAPIHono } from '@hono/zod-openapi'
import { mountPublicLinkHandler, requestHandlerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', mountPublicLinkHandler).route('/', requestHandlerHandler)

export default app
