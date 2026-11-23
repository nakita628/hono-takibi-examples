import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftValidateMatchmakingRuleSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftValidateMatchmakingRuleSetHandler = app.openapi(
  postXAmzTargetGameLiftValidateMatchmakingRuleSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
