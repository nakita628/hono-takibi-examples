import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerDeleteAutoScalingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerDeleteAutoScalingConfigurationHandler = app.openapi(
  postXAmzTargetAppRunnerDeleteAutoScalingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
