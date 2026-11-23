import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaAccessPoliciesRoute,
  getV1betaNameRoute,
  getV1betaParentAccessLevelsRoute,
  getV1betaParentServicePerimetersRoute,
  patchV1betaNameRoute,
  postV1betaAccessPoliciesRoute,
  postV1betaParentAccessLevelsRoute,
  postV1betaParentServicePerimetersRoute,
} from './routes'
import {
  deleteV1betaNameRouteHandler,
  getV1betaAccessPoliciesRouteHandler,
  getV1betaNameRouteHandler,
  getV1betaParentAccessLevelsRouteHandler,
  getV1betaParentServicePerimetersRouteHandler,
  patchV1betaNameRouteHandler,
  postV1betaAccessPoliciesRouteHandler,
  postV1betaParentAccessLevelsRouteHandler,
  postV1betaParentServicePerimetersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1betaAccessPoliciesRoute, getV1betaAccessPoliciesRouteHandler)
  .openapi(postV1betaAccessPoliciesRoute, postV1betaAccessPoliciesRouteHandler)
  .openapi(deleteV1betaNameRoute, deleteV1betaNameRouteHandler)
  .openapi(getV1betaNameRoute, getV1betaNameRouteHandler)
  .openapi(patchV1betaNameRoute, patchV1betaNameRouteHandler)
  .openapi(getV1betaParentAccessLevelsRoute, getV1betaParentAccessLevelsRouteHandler)
  .openapi(postV1betaParentAccessLevelsRoute, postV1betaParentAccessLevelsRouteHandler)
  .openapi(getV1betaParentServicePerimetersRoute, getV1betaParentServicePerimetersRouteHandler)
  .openapi(postV1betaParentServicePerimetersRoute, postV1betaParentServicePerimetersRouteHandler)

export default app
