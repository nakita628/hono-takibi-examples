import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2DiscoveryClientStatusRoute } from './routes'
import { postV2DiscoveryClientStatusRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postV2DiscoveryClientStatusRoute,
  postV2DiscoveryClientStatusRouteHandler,
)

export default app
