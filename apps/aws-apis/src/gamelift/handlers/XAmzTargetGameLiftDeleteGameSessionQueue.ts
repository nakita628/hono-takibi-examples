import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeleteGameSessionQueueRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDeleteGameSessionQueueHandler = app.openapi(
  postXAmzTargetGameLiftDeleteGameSessionQueueRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
