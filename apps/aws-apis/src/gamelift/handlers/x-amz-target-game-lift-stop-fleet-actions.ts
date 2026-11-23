import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftStopFleetActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftStopFleetActionsHandler = app.openapi(
  postXAmzTargetGameLiftStopFleetActionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
