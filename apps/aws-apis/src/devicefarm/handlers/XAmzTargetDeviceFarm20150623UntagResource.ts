import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623UntagResourceHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
