import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute,
  getPoliciesTokenLifetimePoliciesCountRoute,
  getPoliciesTokenLifetimePoliciesRoute,
  getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdAppliesToCountRoute,
  getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdAppliesToDirectoryObjectIdRoute,
  getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdAppliesToRoute,
  getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute,
  patchPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute,
  postPoliciesTokenLifetimePoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesTokenLifetimePolicyHandler = app
  .openapi(getPoliciesTokenLifetimePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesTokenLifetimePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdAppliesToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdAppliesToDirectoryObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdAppliesToCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesTokenLifetimePoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
