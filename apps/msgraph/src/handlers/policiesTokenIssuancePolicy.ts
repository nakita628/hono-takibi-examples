import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRoute,
  getPoliciesTokenIssuancePoliciesCountRoute,
  getPoliciesTokenIssuancePoliciesRoute,
  getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdAppliesToCountRoute,
  getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdAppliesToDirectoryObjectIdRoute,
  getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdAppliesToRoute,
  getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRoute,
  patchPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRoute,
  postPoliciesTokenIssuancePoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesTokenIssuancePolicyHandler = app
  .openapi(getPoliciesTokenIssuancePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesTokenIssuancePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesTokenIssuancePoliciesTokenIssuancePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdAppliesToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdAppliesToDirectoryObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPoliciesTokenIssuancePoliciesTokenIssuancePolicyIdAppliesToCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesTokenIssuancePoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
