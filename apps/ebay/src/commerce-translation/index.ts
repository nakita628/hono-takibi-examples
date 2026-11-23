import { OpenAPIHono } from '@hono/zod-openapi'
import { postTranslateRoute } from './routes'
import { postTranslateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postTranslateRoute, postTranslateRouteHandler)

export default app
