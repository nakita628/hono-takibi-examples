import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetPolicyVersionRoute, postActionGetPolicyVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetPolicyVersionHandler = app
  .openapi(getActionGetPolicyVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetPolicyVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
