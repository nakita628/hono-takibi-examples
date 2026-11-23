import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2NameGetEffectivePolicyRoute,
  getV2NameRoute,
  getV2ParentConstraintsRoute,
  getV2ParentCustomConstraintsRoute,
  getV2ParentPoliciesRoute,
  patchV2NameRoute,
  postV2ParentCustomConstraintsRoute,
  postV2ParentPoliciesRoute,
} from './routes'
import {
  deleteV2NameRouteHandler,
  getV2NameGetEffectivePolicyRouteHandler,
  getV2NameRouteHandler,
  getV2ParentConstraintsRouteHandler,
  getV2ParentCustomConstraintsRouteHandler,
  getV2ParentPoliciesRouteHandler,
  patchV2NameRouteHandler,
  postV2ParentCustomConstraintsRouteHandler,
  postV2ParentPoliciesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV2NameRoute, deleteV2NameRouteHandler)
  .openapi(getV2NameRoute, getV2NameRouteHandler)
  .openapi(patchV2NameRoute, patchV2NameRouteHandler)
  .openapi(getV2NameGetEffectivePolicyRoute, getV2NameGetEffectivePolicyRouteHandler)
  .openapi(getV2ParentConstraintsRoute, getV2ParentConstraintsRouteHandler)
  .openapi(getV2ParentCustomConstraintsRoute, getV2ParentCustomConstraintsRouteHandler)
  .openapi(postV2ParentCustomConstraintsRoute, postV2ParentCustomConstraintsRouteHandler)
  .openapi(getV2ParentPoliciesRoute, getV2ParentPoliciesRouteHandler)
  .openapi(postV2ParentPoliciesRoute, postV2ParentPoliciesRouteHandler)

export default app
