import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeMatchmakingRuleSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDescribeMatchmakingRuleSetsHandler = app.openapi(
  postXAmzTargetGameLiftDescribeMatchmakingRuleSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
