import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreateLocationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftCreateLocationHandler = app.openapi(
  postXAmzTargetGameLiftCreateLocationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
