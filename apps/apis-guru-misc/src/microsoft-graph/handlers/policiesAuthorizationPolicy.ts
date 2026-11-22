import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesAuthorizationPolicyRoute,
  getPoliciesAuthorizationPolicyRoute,
  patchPoliciesAuthorizationPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesAuthorizationPolicyHandler = app
  .openapi(deletePoliciesAuthorizationPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesAuthorizationPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesAuthorizationPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
