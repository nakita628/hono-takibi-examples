import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetBaldrApiServiceTagResourceHandler = app.openapi(
  postXAmzTargetBaldrApiServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
