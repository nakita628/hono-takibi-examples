import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesPolicyIdRoute,
  getPoliciesPolicyIdRoute,
  getPoliciesRoute,
  postPoliciesRoute,
  putPoliciesPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesHandler = app
  .openapi(getPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
