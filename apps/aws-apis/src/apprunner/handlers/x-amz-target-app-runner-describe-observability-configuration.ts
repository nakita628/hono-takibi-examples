import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerDescribeObservabilityConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerDescribeObservabilityConfigurationHandler = app.openapi(
  postXAmzTargetAppRunnerDescribeObservabilityConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
