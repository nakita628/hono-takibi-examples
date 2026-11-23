import { OpenAPIHono } from '@hono/zod-openapi'
import { postRegressionApiRoute } from './routes'
import { postRegressionApiRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postRegressionApiRoute, postRegressionApiRouteHandler)

export default app
