import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreateGameSessionQueueRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftCreateGameSessionQueueHandler = app.openapi(
  postXAmzTargetGameLiftCreateGameSessionQueueRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
