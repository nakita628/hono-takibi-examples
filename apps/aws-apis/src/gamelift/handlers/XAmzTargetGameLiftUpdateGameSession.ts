import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftUpdateGameSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftUpdateGameSessionHandler = app.openapi(
  postXAmzTargetGameLiftUpdateGameSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
