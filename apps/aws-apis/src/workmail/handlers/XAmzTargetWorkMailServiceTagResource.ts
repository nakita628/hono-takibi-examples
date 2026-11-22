import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceTagResourceHandler = app.openapi(
  postXAmzTargetWorkMailServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
