import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetStackPolicyRoute, postActionGetStackPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetStackPolicyHandler = app
  .openapi(getActionGetStackPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetStackPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
