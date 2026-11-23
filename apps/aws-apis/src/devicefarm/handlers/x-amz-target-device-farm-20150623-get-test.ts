import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetTestRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623GetTestHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetTestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
