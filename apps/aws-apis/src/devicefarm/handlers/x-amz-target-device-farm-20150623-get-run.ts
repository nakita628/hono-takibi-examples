import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623GetRunHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
