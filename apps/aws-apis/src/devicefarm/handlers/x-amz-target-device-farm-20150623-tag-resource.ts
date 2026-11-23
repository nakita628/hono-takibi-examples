import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623TagResourceHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
