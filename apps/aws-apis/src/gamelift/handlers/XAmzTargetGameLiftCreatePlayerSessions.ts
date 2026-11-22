import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreatePlayerSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftCreatePlayerSessionsHandler = app.openapi(
  postXAmzTargetGameLiftCreatePlayerSessionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
