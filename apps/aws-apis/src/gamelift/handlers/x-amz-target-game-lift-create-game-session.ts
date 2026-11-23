import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreateGameSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftCreateGameSessionHandler = app.openapi(
  postXAmzTargetGameLiftCreateGameSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
