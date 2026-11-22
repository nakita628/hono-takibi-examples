import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623UpdateUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623UpdateUploadHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623UpdateUploadRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
