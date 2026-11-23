import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftUpdateGameServerGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftUpdateGameServerGroupHandler = app.openapi(
  postXAmzTargetGameLiftUpdateGameServerGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
