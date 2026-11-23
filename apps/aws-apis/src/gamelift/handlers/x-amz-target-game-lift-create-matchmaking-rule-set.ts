import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreateMatchmakingRuleSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftCreateMatchmakingRuleSetHandler = app.openapi(
  postXAmzTargetGameLiftCreateMatchmakingRuleSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
