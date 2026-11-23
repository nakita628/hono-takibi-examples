import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1NameRoute, getV1NameRoute, patchV1NameRoute } from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameRouteHandler,
  patchV1NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)

export default app
