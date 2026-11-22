import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetPolicyRoute, postActionGetPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetPolicyHandler = app
  .openapi(getActionGetPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
