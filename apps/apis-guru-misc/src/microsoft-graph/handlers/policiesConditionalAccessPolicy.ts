import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
  getPoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
  getPoliciesConditionalAccessPoliciesRoute,
  patchPoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRoute,
  postPoliciesConditionalAccessPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesConditionalAccessPolicyHandler = app
  .openapi(getPoliciesConditionalAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesConditionalAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesConditionalAccessPoliciesConditionalAccessPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
