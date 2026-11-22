import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeleteScalingPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDeleteScalingPolicyHandler = app.openapi(
  postXAmzTargetGameLiftDeleteScalingPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
