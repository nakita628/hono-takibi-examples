import { OpenAPIHono } from '@hono/zod-openapi'
import { postTargetPoliciesPolicyNameRoute, putTargetPoliciesPolicyNameRoute } from '../routes'

const app = new OpenAPIHono()

export const targetPoliciesHandler = app
  .openapi(putTargetPoliciesPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetPoliciesPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
