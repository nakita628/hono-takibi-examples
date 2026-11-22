import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceUntagResourceHandler = app.openapi(
  postXAmzTargetWorkMailServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
