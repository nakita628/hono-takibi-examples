import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta2NameCalculateRoute, getV1beta2NameRoute, patchV1beta2NameRoute } from './routes'
import {
  getV1beta2NameCalculateRouteHandler,
  getV1beta2NameRouteHandler,
  patchV1beta2NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1beta2NameRoute, getV1beta2NameRouteHandler)
  .openapi(patchV1beta2NameRoute, patchV1beta2NameRouteHandler)
  .openapi(getV1beta2NameCalculateRoute, getV1beta2NameCalculateRouteHandler)

export default app
