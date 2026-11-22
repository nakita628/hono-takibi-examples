import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623DeleteUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623DeleteUploadHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623DeleteUploadRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
