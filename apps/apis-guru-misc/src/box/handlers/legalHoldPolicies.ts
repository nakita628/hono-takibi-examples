import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLegalHoldPoliciesLegalHoldPolicyIdRoute,
  getLegalHoldPoliciesLegalHoldPolicyIdRoute,
  getLegalHoldPoliciesRoute,
  postLegalHoldPoliciesRoute,
  putLegalHoldPoliciesLegalHoldPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const legalHoldPoliciesHandler = app
  .openapi(getLegalHoldPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalHoldPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegalHoldPoliciesLegalHoldPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalHoldPoliciesLegalHoldPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLegalHoldPoliciesLegalHoldPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
