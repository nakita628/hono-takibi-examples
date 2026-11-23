import { OpenAPIHono } from '@hono/zod-openapi'
import { postAttachedPoliciesTargetRoute } from '../routes'

const app = new OpenAPIHono()

export const attachedPoliciesHandler = app.openapi(postAttachedPoliciesTargetRoute, (c) => {
  throw new Error('Not implemented')
})
