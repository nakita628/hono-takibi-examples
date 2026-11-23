import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerDescribeAutoScalingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerDescribeAutoScalingConfigurationHandler = app.openapi(
  postXAmzTargetAppRunnerDescribeAutoScalingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
