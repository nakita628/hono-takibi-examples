import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NameGetGoogleUpdatedRoute, getV1NameRoute, patchV1NameRoute } from './routes'
import {
  getV1NameGetGoogleUpdatedRouteHandler,
  getV1NameRouteHandler,
  patchV1NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameGetGoogleUpdatedRoute, getV1NameGetGoogleUpdatedRouteHandler)

export default app
