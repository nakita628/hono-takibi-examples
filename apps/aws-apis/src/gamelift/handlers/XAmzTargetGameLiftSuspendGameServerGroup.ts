import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftSuspendGameServerGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftSuspendGameServerGroupHandler = app.openapi(
  postXAmzTargetGameLiftSuspendGameServerGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
