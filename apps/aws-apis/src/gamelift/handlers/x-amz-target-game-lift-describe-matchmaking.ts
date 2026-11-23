import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeMatchmakingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeMatchmakingHandler = app.openapi(
  postXAmzTargetGameLiftDescribeMatchmakingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
