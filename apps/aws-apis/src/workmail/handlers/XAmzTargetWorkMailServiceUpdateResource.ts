import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceUpdateResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceUpdateResourceHandler = app.openapi(
  postXAmzTargetWorkMailServiceUpdateResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
