import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623UntagResourceHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
