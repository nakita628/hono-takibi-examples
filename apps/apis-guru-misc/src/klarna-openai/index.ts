import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicOpenaiV0ProductsRoute } from './routes'
import { getPublicOpenaiV0ProductsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  getPublicOpenaiV0ProductsRoute,
  getPublicOpenaiV0ProductsRouteHandler,
)

export default app
