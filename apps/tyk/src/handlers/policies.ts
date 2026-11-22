import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTykPoliciesPolIDRoute,
  getTykPoliciesPolIDRoute,
  getTykPoliciesRoute,
  postTykPoliciesRoute,
  putTykPoliciesPolIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesHandler = app
  .openapi(getTykPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykPoliciesPolIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykPoliciesPolIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTykPoliciesPolIDRoute, (c) => {
    throw new Error('Not implemented')
  })
