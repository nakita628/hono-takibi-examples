import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPolicyEnginePoliciesIdRoute,
  getApiPolicyEnginePoliciesIdRoute,
  getApiPolicyEnginePoliciesRoute,
  postApiPolicyEngineEvaluateRoute,
  postApiPolicyEnginePoliciesIdRoute,
  putApiPolicyEnginePoliciesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiPolicyEngineEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPolicyEnginePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPolicyEnginePoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPolicyEnginePoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPolicyEnginePoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPolicyEnginePoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
