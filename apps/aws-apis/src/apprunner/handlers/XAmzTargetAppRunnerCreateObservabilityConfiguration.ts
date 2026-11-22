import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerCreateObservabilityConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerCreateObservabilityConfigurationHandler = app.openapi(
  postXAmzTargetAppRunnerCreateObservabilityConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
