import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUntagPolicyRoute, postActionUntagPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionUntagPolicyHandler = app
  .openapi(getActionUntagPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUntagPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
