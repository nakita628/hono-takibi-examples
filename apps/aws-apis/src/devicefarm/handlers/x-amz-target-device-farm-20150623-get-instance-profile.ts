import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetInstanceProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623GetInstanceProfileHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetInstanceProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
