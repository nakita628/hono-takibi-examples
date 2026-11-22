import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetUserPolicyRoute, postActionGetUserPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetUserPolicyHandler = app
  .openapi(getActionGetUserPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetUserPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
