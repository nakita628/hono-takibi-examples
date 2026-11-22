import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute,
  getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute,
  getPoliciesClaimsMappingPoliciesRoute,
  patchPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute,
  postPoliciesClaimsMappingPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesClaimsMappingPolicyHandler = app
  .openapi(getPoliciesClaimsMappingPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesClaimsMappingPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
