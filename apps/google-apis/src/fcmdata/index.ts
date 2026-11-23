import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1ParentDeliveryDataRoute } from './routes'
import { getV1beta1ParentDeliveryDataRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  getV1beta1ParentDeliveryDataRoute,
  getV1beta1ParentDeliveryDataRouteHandler,
)

export default app
