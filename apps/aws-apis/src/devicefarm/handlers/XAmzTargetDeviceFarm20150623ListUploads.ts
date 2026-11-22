import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListUploadsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListUploadsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListUploadsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
