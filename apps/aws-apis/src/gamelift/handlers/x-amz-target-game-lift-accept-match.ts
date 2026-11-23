import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftAcceptMatchRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftAcceptMatchHandler = app.openapi(
  postXAmzTargetGameLiftAcceptMatchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
