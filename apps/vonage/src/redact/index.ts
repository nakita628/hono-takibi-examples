import { OpenAPIHono } from '@hono/zod-openapi'
import { postTransactionRoute } from './routes'
import { postTransactionRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postTransactionRoute, postTransactionRouteHandler)

export default app
