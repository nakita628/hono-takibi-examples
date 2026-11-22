import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1RbacPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const consumerRbacHandler = app.openapi(getV1RbacPolicyRoute, (c) => {
  throw new Error('Not implemented')
})
