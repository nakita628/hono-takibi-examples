import { OpenAPIHono } from '@hono/zod-openapi'
import { getGroupUniqueIdRoute, patchGroupUniqueIdRoute, putGroupUniqueIdRoute } from './routes'
import {
  getGroupUniqueIdRouteHandler,
  patchGroupUniqueIdRouteHandler,
  putGroupUniqueIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getGroupUniqueIdRoute, getGroupUniqueIdRouteHandler)
  .openapi(patchGroupUniqueIdRoute, patchGroupUniqueIdRouteHandler)
  .openapi(putGroupUniqueIdRoute, putGroupUniqueIdRouteHandler)

export default app
