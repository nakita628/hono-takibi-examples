import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaNameRoute,
  getV1betaParentInstancesRoute,
  postV1betaNameDisableRoute,
  postV1betaNameReenableRoute,
  postV1betaNameUndeleteRoute,
  postV1betaParentInstancesRoute,
} from './routes'
import {
  deleteV1betaNameRouteHandler,
  getV1betaNameRouteHandler,
  getV1betaParentInstancesRouteHandler,
  postV1betaNameDisableRouteHandler,
  postV1betaNameReenableRouteHandler,
  postV1betaNameUndeleteRouteHandler,
  postV1betaParentInstancesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1betaNameRoute, deleteV1betaNameRouteHandler)
  .openapi(getV1betaNameRoute, getV1betaNameRouteHandler)
  .openapi(postV1betaNameDisableRoute, postV1betaNameDisableRouteHandler)
  .openapi(postV1betaNameReenableRoute, postV1betaNameReenableRouteHandler)
  .openapi(postV1betaNameUndeleteRoute, postV1betaNameUndeleteRouteHandler)
  .openapi(getV1betaParentInstancesRoute, getV1betaParentInstancesRouteHandler)
  .openapi(postV1betaParentInstancesRoute, postV1betaParentInstancesRouteHandler)

export default app
