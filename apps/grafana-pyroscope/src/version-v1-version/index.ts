import { OpenAPIHono } from '@hono/zod-openapi'
import { postVersionV1VersionVersionRoute } from './routes'
import { postVersionV1VersionVersionRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postVersionV1VersionVersionRoute,
  postVersionV1VersionVersionRouteHandler,
)

export default app
