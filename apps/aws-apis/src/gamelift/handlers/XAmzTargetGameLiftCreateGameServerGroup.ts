import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreateGameServerGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftCreateGameServerGroupHandler = app.openapi(
  postXAmzTargetGameLiftCreateGameServerGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
