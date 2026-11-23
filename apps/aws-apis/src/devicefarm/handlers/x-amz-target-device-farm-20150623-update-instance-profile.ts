import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623UpdateInstanceProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623UpdateInstanceProfileHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623UpdateInstanceProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
