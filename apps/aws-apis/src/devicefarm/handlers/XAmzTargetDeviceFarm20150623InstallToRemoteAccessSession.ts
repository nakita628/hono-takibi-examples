import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623InstallToRemoteAccessSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623InstallToRemoteAccessSessionHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623InstallToRemoteAccessSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
