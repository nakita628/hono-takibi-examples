import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPutScalingPolicyRoute, postActionPutScalingPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionPutScalingPolicyHandler = app
  .openapi(getActionPutScalingPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutScalingPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
