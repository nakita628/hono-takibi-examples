import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesPolicyNameRoute,
  deletePoliciesPolicyNameVersionPolicyVersionIdRoute,
  getPoliciesPolicyNameRoute,
  getPoliciesPolicyNameVersionPolicyVersionIdRoute,
  getPoliciesPolicyNameVersionRoute,
  getPoliciesRoute,
  patchPoliciesPolicyNameVersionPolicyVersionIdRoute,
  postPoliciesPolicyNameRoute,
  postPoliciesPolicyNameVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesHandler = app
  .openapi(postPoliciesPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesPolicyNameVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesPolicyNameVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesPolicyNameVersionPolicyVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesPolicyNameVersionPolicyVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesPolicyNameVersionPolicyVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
