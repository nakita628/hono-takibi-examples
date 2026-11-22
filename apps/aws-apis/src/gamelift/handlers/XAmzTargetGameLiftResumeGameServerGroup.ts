import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftResumeGameServerGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftResumeGameServerGroupHandler = app.openapi(
  postXAmzTargetGameLiftResumeGameServerGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
