import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerListObservabilityConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerListObservabilityConfigurationsHandler = app.openapi(
  postXAmzTargetAppRunnerListObservabilityConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
