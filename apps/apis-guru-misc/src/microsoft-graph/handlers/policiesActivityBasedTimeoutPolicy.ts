import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRoute,
  getPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRoute,
  getPoliciesActivityBasedTimeoutPoliciesRoute,
  patchPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRoute,
  postPoliciesActivityBasedTimeoutPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesActivityBasedTimeoutPolicyHandler = app
  .openapi(getPoliciesActivityBasedTimeoutPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesActivityBasedTimeoutPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesActivityBasedTimeoutPoliciesActivityBasedTimeoutPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
