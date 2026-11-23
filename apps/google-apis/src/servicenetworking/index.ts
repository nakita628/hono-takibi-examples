import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1betaNameRoute,
  getV1betaParentConnectionsRoute,
  patchV1betaNameConnectionsRoute,
  postV1betaParentAddSubnetworkRoute,
  postV1betaParentConnectionsRoute,
  postV1betaParentSearchRangeRoute,
} from './routes'
import {
  getV1betaNameRouteHandler,
  getV1betaParentConnectionsRouteHandler,
  patchV1betaNameConnectionsRouteHandler,
  postV1betaParentAddSubnetworkRouteHandler,
  postV1betaParentConnectionsRouteHandler,
  postV1betaParentSearchRangeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1betaNameRoute, getV1betaNameRouteHandler)
  .openapi(patchV1betaNameConnectionsRoute, patchV1betaNameConnectionsRouteHandler)
  .openapi(getV1betaParentConnectionsRoute, getV1betaParentConnectionsRouteHandler)
  .openapi(postV1betaParentConnectionsRoute, postV1betaParentConnectionsRouteHandler)
  .openapi(postV1betaParentAddSubnetworkRoute, postV1betaParentAddSubnetworkRouteHandler)
  .openapi(postV1betaParentSearchRangeRoute, postV1betaParentSearchRangeRouteHandler)

export default app
