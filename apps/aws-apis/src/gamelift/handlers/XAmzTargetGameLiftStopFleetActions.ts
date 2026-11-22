import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftStopFleetActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftStopFleetActionsHandler = app.openapi(
  postXAmzTargetGameLiftStopFleetActionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
