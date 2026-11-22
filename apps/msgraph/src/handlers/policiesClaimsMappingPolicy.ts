import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute,
  getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdAppliesToCountRoute,
  getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdAppliesToDirectoryObjectIdRoute,
  getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdAppliesToRoute,
  getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute,
  getPoliciesClaimsMappingPoliciesCountRoute,
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
  .openapi(getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesClaimsMappingPoliciesClaimsMappingPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdAppliesToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdAppliesToDirectoryObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPoliciesClaimsMappingPoliciesClaimsMappingPolicyIdAppliesToCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesClaimsMappingPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
