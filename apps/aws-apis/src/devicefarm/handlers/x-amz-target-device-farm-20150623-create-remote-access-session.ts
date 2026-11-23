import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623CreateRemoteAccessSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623CreateRemoteAccessSessionHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623CreateRemoteAccessSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
