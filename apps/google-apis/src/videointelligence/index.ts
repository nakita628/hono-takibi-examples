import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1p3beta1VideosAnnotateRoute } from './routes'
import { postV1p3beta1VideosAnnotateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postV1p3beta1VideosAnnotateRoute,
  postV1p3beta1VideosAnnotateRouteHandler,
)

export default app
