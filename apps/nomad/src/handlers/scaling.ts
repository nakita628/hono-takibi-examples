import { OpenAPIHono } from '@hono/zod-openapi'
import { getScalingPoliciesRoute, getScalingPolicyPolicyIDRoute } from '../routes'

const app = new OpenAPIHono()

export const scalingHandler = app
  .openapi(getScalingPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScalingPolicyPolicyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
