import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetStackPolicyRoute, postActionGetStackPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetStackPolicyHandler = app
  .openapi(getActionGetStackPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetStackPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
