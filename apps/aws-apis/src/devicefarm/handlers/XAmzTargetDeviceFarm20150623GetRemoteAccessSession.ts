import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetRemoteAccessSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623GetRemoteAccessSessionHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetRemoteAccessSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
