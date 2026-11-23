import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alphaNameRoute,
  getV1alphaNameRoute,
  getV1alphaParentInstancesRoute,
  getV1alphaParentWorkerpoolsRoute,
  patchV1alphaNameRoute,
  postV1alphaNameTestNotifyRoute,
  postV1alphaParentInstancesRoute,
  postV1alphaParentWorkerpoolsRoute,
} from './routes'
import {
  deleteV1alphaNameRouteHandler,
  getV1alphaNameRouteHandler,
  getV1alphaParentInstancesRouteHandler,
  getV1alphaParentWorkerpoolsRouteHandler,
  patchV1alphaNameRouteHandler,
  postV1alphaNameTestNotifyRouteHandler,
  postV1alphaParentInstancesRouteHandler,
  postV1alphaParentWorkerpoolsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1alphaNameRoute, deleteV1alphaNameRouteHandler)
  .openapi(getV1alphaNameRoute, getV1alphaNameRouteHandler)
  .openapi(patchV1alphaNameRoute, patchV1alphaNameRouteHandler)
  .openapi(postV1alphaNameTestNotifyRoute, postV1alphaNameTestNotifyRouteHandler)
  .openapi(getV1alphaParentInstancesRoute, getV1alphaParentInstancesRouteHandler)
  .openapi(postV1alphaParentInstancesRoute, postV1alphaParentInstancesRouteHandler)
  .openapi(getV1alphaParentWorkerpoolsRoute, getV1alphaParentWorkerpoolsRouteHandler)
  .openapi(postV1alphaParentWorkerpoolsRoute, postV1alphaParentWorkerpoolsRouteHandler)

export default app
