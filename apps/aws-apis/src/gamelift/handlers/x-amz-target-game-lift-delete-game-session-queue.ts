import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeleteGameSessionQueueRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDeleteGameSessionQueueHandler = app.openapi(
  postXAmzTargetGameLiftDeleteGameSessionQueueRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
