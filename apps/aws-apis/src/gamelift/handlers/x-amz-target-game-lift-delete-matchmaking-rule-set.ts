import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeleteMatchmakingRuleSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDeleteMatchmakingRuleSetHandler = app.openapi(
  postXAmzTargetGameLiftDeleteMatchmakingRuleSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
