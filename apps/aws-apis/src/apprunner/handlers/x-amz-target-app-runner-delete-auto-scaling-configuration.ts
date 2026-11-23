import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerDeleteAutoScalingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerDeleteAutoScalingConfigurationHandler = app.openapi(
  postXAmzTargetAppRunnerDeleteAutoScalingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
