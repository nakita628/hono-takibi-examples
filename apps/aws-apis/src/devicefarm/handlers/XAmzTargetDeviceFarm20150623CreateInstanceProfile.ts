import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623CreateInstanceProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623CreateInstanceProfileHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623CreateInstanceProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
