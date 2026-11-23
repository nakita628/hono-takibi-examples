import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftUntagResourceHandler = app.openapi(
  postXAmzTargetGameLiftUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
