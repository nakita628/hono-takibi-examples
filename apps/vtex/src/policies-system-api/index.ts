import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPolicyEnginePoliciesIdRoute,
  getApiPolicyEnginePoliciesIdRoute,
  getApiPolicyEnginePoliciesRoute,
  postApiPolicyEngineEvaluateRoute,
  postApiPolicyEnginePoliciesIdRoute,
  putApiPolicyEnginePoliciesIdRoute,
} from './routes'
import {
  deleteApiPolicyEnginePoliciesIdRouteHandler,
  getApiPolicyEnginePoliciesIdRouteHandler,
  getApiPolicyEnginePoliciesRouteHandler,
  postApiPolicyEngineEvaluateRouteHandler,
  postApiPolicyEnginePoliciesIdRouteHandler,
  putApiPolicyEnginePoliciesIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiPolicyEngineEvaluateRoute, postApiPolicyEngineEvaluateRouteHandler)
  .openapi(getApiPolicyEnginePoliciesRoute, getApiPolicyEnginePoliciesRouteHandler)
  .openapi(deleteApiPolicyEnginePoliciesIdRoute, deleteApiPolicyEnginePoliciesIdRouteHandler)
  .openapi(getApiPolicyEnginePoliciesIdRoute, getApiPolicyEnginePoliciesIdRouteHandler)
  .openapi(postApiPolicyEnginePoliciesIdRoute, postApiPolicyEnginePoliciesIdRouteHandler)
  .openapi(putApiPolicyEnginePoliciesIdRoute, putApiPolicyEnginePoliciesIdRouteHandler)

export default app
