import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623GetUploadHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetUploadRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
