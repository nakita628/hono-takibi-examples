import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftPutScalingPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftPutScalingPolicyHandler = app.openapi(
  postXAmzTargetGameLiftPutScalingPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
