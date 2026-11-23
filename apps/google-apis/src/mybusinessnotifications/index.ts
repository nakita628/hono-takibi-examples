import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NameRoute, patchV1NameRoute } from './routes'
import { getV1NameRouteHandler, patchV1NameRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)

export default app
