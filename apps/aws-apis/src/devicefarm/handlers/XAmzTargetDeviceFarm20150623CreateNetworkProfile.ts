import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623CreateNetworkProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623CreateNetworkProfileHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623CreateNetworkProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
