import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftStartFleetActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftStartFleetActionsHandler = app.openapi(
  postXAmzTargetGameLiftStartFleetActionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
