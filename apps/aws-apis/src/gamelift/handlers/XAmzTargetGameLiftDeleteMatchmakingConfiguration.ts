import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeleteMatchmakingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDeleteMatchmakingConfigurationHandler = app.openapi(
  postXAmzTargetGameLiftDeleteMatchmakingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
