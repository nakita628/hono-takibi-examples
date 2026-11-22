import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchPoliciesAccountPolicyIdentifierRoute,
  postPoliciesAccountPolicyIdentifierRoute,
  putPoliciesAccountPolicyIdentifierRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesHandler = app
  .openapi(patchPoliciesAccountPolicyIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesAccountPolicyIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPoliciesAccountPolicyIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
