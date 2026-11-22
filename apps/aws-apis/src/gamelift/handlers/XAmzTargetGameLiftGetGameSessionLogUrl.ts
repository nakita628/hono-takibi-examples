import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftGetGameSessionLogUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftGetGameSessionLogUrlHandler = app.openapi(
  postXAmzTargetGameLiftGetGameSessionLogUrlRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
