import { OpenAPIHono } from '@hono/zod-openapi'
import { putFormPrimitiveRoute } from './routes'
import { putFormPrimitiveRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(putFormPrimitiveRoute, putFormPrimitiveRouteHandler)

export default app
