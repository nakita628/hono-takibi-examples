import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623DeleteRemoteAccessSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623DeleteRemoteAccessSessionHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623DeleteRemoteAccessSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
