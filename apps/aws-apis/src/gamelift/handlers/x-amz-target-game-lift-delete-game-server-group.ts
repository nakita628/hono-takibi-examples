import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeleteGameServerGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDeleteGameServerGroupHandler = app.openapi(
  postXAmzTargetGameLiftDeleteGameServerGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
