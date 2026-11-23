import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetfullnameparsedmatchRoute } from './routes'
import { getGetfullnameparsedmatchRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  getGetfullnameparsedmatchRoute,
  getGetfullnameparsedmatchRouteHandler,
)

export default app
