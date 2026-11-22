import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerDeleteObservabilityConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerDeleteObservabilityConfigurationHandler = app.openapi(
  postXAmzTargetAppRunnerDeleteObservabilityConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
