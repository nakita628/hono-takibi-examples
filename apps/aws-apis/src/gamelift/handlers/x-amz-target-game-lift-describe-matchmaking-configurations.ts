import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeMatchmakingConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeMatchmakingConfigurationsHandler = app.openapi(
  postXAmzTargetGameLiftDescribeMatchmakingConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
