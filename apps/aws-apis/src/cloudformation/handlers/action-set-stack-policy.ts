import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSetStackPolicyRoute, postActionSetStackPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionSetStackPolicyHandler = app
  .openapi(getActionSetStackPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetStackPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
