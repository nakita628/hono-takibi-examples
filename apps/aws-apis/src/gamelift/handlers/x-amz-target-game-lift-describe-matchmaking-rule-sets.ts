import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeMatchmakingRuleSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeMatchmakingRuleSetsHandler = app.openapi(
  postXAmzTargetGameLiftDescribeMatchmakingRuleSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
