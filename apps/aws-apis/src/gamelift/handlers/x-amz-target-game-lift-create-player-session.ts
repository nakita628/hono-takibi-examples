import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreatePlayerSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftCreatePlayerSessionHandler = app.openapi(
  postXAmzTargetGameLiftCreatePlayerSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
