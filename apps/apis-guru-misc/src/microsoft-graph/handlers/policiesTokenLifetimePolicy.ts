import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute,
  getPoliciesTokenLifetimePoliciesRoute,
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
  .openapi(deletePoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesTokenLifetimePoliciesTokenLifetimePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
