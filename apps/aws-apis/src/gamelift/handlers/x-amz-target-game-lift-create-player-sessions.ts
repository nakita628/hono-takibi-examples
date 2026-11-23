import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreatePlayerSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftCreatePlayerSessionsHandler = app.openapi(
  postXAmzTargetGameLiftCreatePlayerSessionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
