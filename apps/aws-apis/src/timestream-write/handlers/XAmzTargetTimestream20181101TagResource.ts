import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTimestream20181101TagResourceHandler = app.openapi(
  postXAmzTargetTimestream20181101TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
