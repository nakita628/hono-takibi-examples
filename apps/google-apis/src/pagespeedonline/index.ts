import { OpenAPIHono } from '@hono/zod-openapi'
import { getPagespeedonlineV5RunPagespeedRoute } from './routes'
import { getPagespeedonlineV5RunPagespeedRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  getPagespeedonlineV5RunPagespeedRoute,
  getPagespeedonlineV5RunPagespeedRouteHandler,
)

export default app
