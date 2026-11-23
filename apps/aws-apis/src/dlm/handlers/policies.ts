import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesPolicyIdIndexRoute,
  getPoliciesPolicyIdIndexRoute,
  getPoliciesRoute,
  patchPoliciesPolicyIdRoute,
  postPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesHandler = app
  .openapi(postPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesPolicyIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesPolicyIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
