import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftUpdateMatchmakingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftUpdateMatchmakingConfigurationHandler = app.openapi(
  postXAmzTargetGameLiftUpdateMatchmakingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
