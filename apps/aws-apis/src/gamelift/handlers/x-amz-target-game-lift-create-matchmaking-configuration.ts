import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreateMatchmakingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftCreateMatchmakingConfigurationHandler = app.openapi(
  postXAmzTargetGameLiftCreateMatchmakingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
