import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftUpdateGameSessionQueueRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftUpdateGameSessionQueueHandler = app.openapi(
  postXAmzTargetGameLiftUpdateGameSessionQueueRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
