import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSimulateCustomPolicyRoute, postActionSimulateCustomPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionSimulateCustomPolicyHandler = app
  .openapi(getActionSimulateCustomPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSimulateCustomPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
