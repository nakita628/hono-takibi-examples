import { OpenAPIHono } from '@hono/zod-openapi'
import { postPolicyTargetsPolicyNameRoute } from '../routes'

const app = new OpenAPIHono()

export const policyTargetsHandler = app.openapi(postPolicyTargetsPolicyNameRoute, (c) => {
  throw new Error('Not implemented')
})
