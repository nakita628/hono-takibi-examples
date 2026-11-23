import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerCreateAutoScalingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerCreateAutoScalingConfigurationHandler = app.openapi(
  postXAmzTargetAppRunnerCreateAutoScalingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
