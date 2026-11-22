import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesAuthenticationFlowsPolicyRoute,
  getPoliciesAuthenticationFlowsPolicyRoute,
  patchPoliciesAuthenticationFlowsPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesAuthenticationFlowsPolicyHandler = app
  .openapi(getPoliciesAuthenticationFlowsPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesAuthenticationFlowsPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesAuthenticationFlowsPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
