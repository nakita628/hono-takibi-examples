import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NameRoute, getV1ParentSettingsRoute, patchV1NameRoute } from './routes'
import {
  getV1NameRouteHandler,
  getV1ParentSettingsRouteHandler,
  patchV1NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1ParentSettingsRoute, getV1ParentSettingsRouteHandler)

export default app
