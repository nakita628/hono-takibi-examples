import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerListAutoScalingConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerListAutoScalingConfigurationsHandler = app.openapi(
  postXAmzTargetAppRunnerListAutoScalingConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
