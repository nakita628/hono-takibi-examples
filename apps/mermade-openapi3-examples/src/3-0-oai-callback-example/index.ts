import { OpenAPIHono } from '@hono/zod-openapi'
import { postStreamsRoute } from './routes'
import { postStreamsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postStreamsRoute, postStreamsRouteHandler)

export default app
