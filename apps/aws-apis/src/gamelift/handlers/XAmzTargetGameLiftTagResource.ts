import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftTagResourceHandler = app.openapi(
  postXAmzTargetGameLiftTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
