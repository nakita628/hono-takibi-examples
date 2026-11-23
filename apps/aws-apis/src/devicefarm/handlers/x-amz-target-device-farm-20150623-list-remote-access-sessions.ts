import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListRemoteAccessSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623ListRemoteAccessSessionsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListRemoteAccessSessionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
