import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623StopRemoteAccessSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623StopRemoteAccessSessionHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623StopRemoteAccessSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
