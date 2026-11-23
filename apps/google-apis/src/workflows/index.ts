import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaNameLocationsRoute,
  getV1betaNameOperationsRoute,
  getV1betaNameRoute,
  getV1betaParentWorkflowsRoute,
  patchV1betaNameRoute,
  postV1betaParentWorkflowsRoute,
} from './routes'
import {
  deleteV1betaNameRouteHandler,
  getV1betaNameLocationsRouteHandler,
  getV1betaNameOperationsRouteHandler,
  getV1betaNameRouteHandler,
  getV1betaParentWorkflowsRouteHandler,
  patchV1betaNameRouteHandler,
  postV1betaParentWorkflowsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1betaNameRoute, deleteV1betaNameRouteHandler)
  .openapi(getV1betaNameRoute, getV1betaNameRouteHandler)
  .openapi(patchV1betaNameRoute, patchV1betaNameRouteHandler)
  .openapi(getV1betaNameLocationsRoute, getV1betaNameLocationsRouteHandler)
  .openapi(getV1betaNameOperationsRoute, getV1betaNameOperationsRouteHandler)
  .openapi(getV1betaParentWorkflowsRoute, getV1betaParentWorkflowsRouteHandler)
  .openapi(postV1betaParentWorkflowsRoute, postV1betaParentWorkflowsRouteHandler)

export default app
