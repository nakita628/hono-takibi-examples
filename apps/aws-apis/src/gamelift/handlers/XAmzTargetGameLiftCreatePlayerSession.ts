import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreatePlayerSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftCreatePlayerSessionHandler = app.openapi(
  postXAmzTargetGameLiftCreatePlayerSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
