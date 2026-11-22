import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ActionsExecutionPoliciesPolicyIdRoute,
  getApiV2ActionsExecutionPoliciesPolicyIdRoute,
  getApiV2ActionsExecutionPoliciesRoute,
  postApiV2ActionsExecutionPoliciesRoute,
  putApiV2ActionsExecutionPoliciesPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const executionPolicyHandler = app
  .openapi(getApiV2ActionsExecutionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ActionsExecutionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ActionsExecutionPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActionsExecutionPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ActionsExecutionPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
