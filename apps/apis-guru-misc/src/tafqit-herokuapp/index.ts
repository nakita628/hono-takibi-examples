import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertRoute } from './routes'
import { postConvertRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postConvertRoute, postConvertRouteHandler)

export default app
