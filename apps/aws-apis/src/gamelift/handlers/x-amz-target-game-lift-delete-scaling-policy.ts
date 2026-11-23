import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeleteScalingPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDeleteScalingPolicyHandler = app.openapi(
  postXAmzTargetGameLiftDeleteScalingPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
