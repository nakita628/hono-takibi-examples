import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceCreateResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceCreateResourceHandler = app.openapi(
  postXAmzTargetWorkMailServiceCreateResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
