import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftListGameServerGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftListGameServerGroupsHandler = app.openapi(
  postXAmzTargetGameLiftListGameServerGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
