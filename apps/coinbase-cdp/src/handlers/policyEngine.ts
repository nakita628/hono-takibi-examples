import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2PolicyEnginePoliciesPolicyIdRoute,
  getV2PolicyEnginePoliciesPolicyIdRoute,
  getV2PolicyEnginePoliciesRoute,
  postV2PolicyEnginePoliciesPolicyIdPauseRoute,
  postV2PolicyEnginePoliciesPolicyIdResumeRoute,
  postV2PolicyEnginePoliciesRoute,
  postV2PolicyEngineSimulateRoute,
  putV2PolicyEnginePoliciesPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policyEngineHandler = app
  .openapi(getV2PolicyEnginePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PolicyEnginePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PolicyEngineSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PolicyEnginePoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2PolicyEnginePoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2PolicyEnginePoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PolicyEnginePoliciesPolicyIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PolicyEnginePoliciesPolicyIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
