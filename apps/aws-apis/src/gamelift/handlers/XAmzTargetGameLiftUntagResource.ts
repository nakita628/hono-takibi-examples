import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftUntagResourceHandler = app.openapi(
  postXAmzTargetGameLiftUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
