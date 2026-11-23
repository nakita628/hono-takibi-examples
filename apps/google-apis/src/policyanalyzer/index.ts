import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1ParentActivitiesQueryRoute } from './routes'
import { getV1beta1ParentActivitiesQueryRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  getV1beta1ParentActivitiesQueryRoute,
  getV1beta1ParentActivitiesQueryRouteHandler,
)

export default app
